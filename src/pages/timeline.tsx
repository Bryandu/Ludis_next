import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import NewPost from '../components/newPost/newPost';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import {
  TimelineContainer,
  TimelineLeft,
  TimelinePosts,
  TimelineRight
} from '../styles/timelineStyles';

type Posts = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Timeline = () => {
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const [post, setPosts] = useState<Posts[]>();
  const [fullposts, setFullposts] = useState(0);
  const [postCount, setPostcount] = useState(5);
  const { data } = useSWR('https://jsonplaceholder.typicode.com/photos', fetcher);

  useEffect(() => {
    if (data) {
      setPosts(data?.slice(0, postCount));
      setFullposts(data?.length);
    }
    console.log(data);
  }, [postCount, data]);

  async function loadMore() {
    if (!post) {
      return null;
    }
    if (post.length < fullposts - 1) {
      data?.slice(postCount, postCount + 5);
      setPostcount(postCount + 5);
      if (data) {
        setPosts(el => el?.concat(data));
      }
    }
  }

  return (
    <>
      <Header position="fixed" />
      <TimelineContainer>
        <TimelineLeft>
          <NewPost />
        </TimelineLeft>
        <TimelinePosts>
          {post?.map(post => {
            return (
              <Post
                key={post.id}
                name={String(post.id)}
                body={post.url}
                title={post.title}
                profile={post.thumbnailUrl}
              />
            );
          })}
          <InfineScroll loadmore={loadMore} />
          {post?.length === fullposts - 1 ? <div>Não há mais posts</div> : <Spinner />}
        </TimelinePosts>
        <TimelineRight></TimelineRight>
      </TimelineContainer>
    </>
  );
};

export default withAuth(Timeline);
