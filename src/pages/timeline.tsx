import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useSWRInfinite } from 'swr';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import NewPost from '../components/newPost/newPost';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { userGetInitialPosts, userGetMorePosts } from '../store/ducks/user/userActions';
import { postSelector } from '../store/ducks/user/userSelectors';
import { Posts } from '../store/ducks/user/userTypes';
import { SagaStore, storeWrapper } from '../store/store';
import {
  TimelineContainer,
  TimelineLeft,
  TimelinePosts,
  TimelineRight
} from '../styles/timelineStyles';

const Timeline = () => {
  const [postlist, setPostlist] = useState(2);
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const { data, error, size, setSize } = useSWRInfinite(
    index => `https://jsonplaceholder.typicode.com/photos?_page=${index}`,
    fetcher,
    {
      revalidateOnReconnect: true,
      initialSize: 2
    }
  );
  const loading = (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userGetMorePosts(data?.flat(1)));
  }, [data, dispatch]);

  useEffect(() => {
    console.log(size);
  }, [size]);

  function loadMore() {
    setPostlist(postlist + 3);
    if (!loading) {
      setSize(size + 1);
    }
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>Ludis</title>
      </Head>
      <Header position="fixed" />
      <TimelineContainer>
        <TimelineLeft>
          <NewPost />
        </TimelineLeft>
        <TimelinePosts>
          {posts?.slice(10, postlist).map(post => {
            return (
              post && (
                <Post
                  key={post?.id}
                  name={String(post?.id)}
                  body={post?.url}
                  title={post?.title}
                  profile={post?.thumbnailUrl}
                />
              )
            );
          })}
          {loading && (
            <div className="warnings">
              <Spinner />
            </div>
          )}
          {!loading && <InfineScroll loadmore={loadMore} />}
        </TimelinePosts>
        <TimelineRight></TimelineRight>
      </TimelineContainer>
    </>
  );
};

export default withAuth(Timeline);

export const getStaticProps = storeWrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().posts) {
    store.dispatch(userGetInitialPosts());
    store.dispatch(END);
  }
  await (store as SagaStore).sagaTask?.toPromise();
});
