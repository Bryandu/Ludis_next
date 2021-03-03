import { useEffect, useState } from 'react';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import WithAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { UserState } from '../store/ducks/user/userTypes';
import { TimelineContainer, TimelinePosts } from '../styles/timelineStyles';

type Posts = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

const Timeline = ({ data }: UserState) => {
  const [post, setPosts] = useState<Posts[]>();
  const [fullposts, setFullposts] = useState(0);

  useEffect(() => {
    GET<Posts[]>('https://jsonplaceholder.typicode.com/posts').then(response => {
      setPosts(response?.data.slice(0, 50));
      setFullposts(response?.data.length);
    });
  }, []);

  async function loadMore() {
    if (!post) {
      return null;
    }
    if (post.length < fullposts - 1) {
      const response = await GET<Posts[]>('https://jsonplaceholder.typicode.com/posts');
      const res = response?.data.slice(51, 100);
      setPosts(el => el.concat(res));
    }
  }

  return (
    <>
      <Header position="fixed" />
      <TimelineContainer>
        <TimelinePosts>
          {post?.map(el => {
            return <Post key={el.id} name={el.userId} body={el.body} />;
          })}
          {post?.length === fullposts - 1 && <div>Não há mais posts</div>}
          {post?.length !== fullposts - 1 && <Spinner />}
          <InfineScroll loadmore={loadMore} />
        </TimelinePosts>
      </TimelineContainer>
    </>
  );
};

export default WithAuth(Timeline);
