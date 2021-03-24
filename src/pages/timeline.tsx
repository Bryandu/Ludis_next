import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { END } from 'redux-saga';
import { useSWRInfinite } from 'swr';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import NewPost from '../components/newPost/newPost';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { /*userGetInitialPosts,*/ userGetMorePosts } from '../store/ducks/user/userActions';
import { postSelector } from '../store/ducks/user/userSelectors';
import { Posts } from '../store/ducks/user/userTypes';
import { /*SagaStore,*/ storeWrapper } from '../store/store';
import {
  TimelineContainer,
  TimelineLeft,
  TimelinePosts,
  TimelineRight
} from '../styles/timelineStyles';

const Timeline = () => {
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const posts = useSelector(postSelector);
  const { data, error, size, setSize } = useSWRInfinite(
    index => `http://localhost:3002/posts?_page=${index === 0 ? 1 : index}`,
    fetcher,
    {
      refreshInterval: 30000
    }
  );
  const dispatch = useDispatch();
  const isLoading =
    (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data && data[size - 1]?.length === 0;

  useEffect(() => {
    if (data) {
      dispatch(userGetMorePosts(data?.slice(1, Number.MAX_SAFE_INTEGER)));
    }
  }, [dispatch, data]);

  const loadMore = useCallback(() => {
    if (!isLoading && !isEmpty) {
      setSize(size => size + 1);
    }
    return <Spinner />;
  }, [isEmpty, isLoading, setSize]);

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
          {posts?.flat(1).map(post => {
            return (
              post && (
                <Post
                  key={post?.id}
                  nameUser={String(post?.name)}
                  body={post?.url}
                  message={post?.title}
                  photoUser={post?.thumbnailUrl}
                />
              )
            );
          })}
          {isLoading && (
            <div className="warnings">
              <Spinner />
            </div>
          )}
          {!isLoading && <InfineScroll loadmore={loadMore} />}
          {isEmpty && (
            <div className="warnings">
              <p>Acabaram os posts.</p>
            </div>
          )}
        </TimelinePosts>
        <TimelineRight></TimelineRight>
      </TimelineContainer>
    </>
  );
};

export default withAuth(Timeline);

export const getStaticProps = storeWrapper.getStaticProps(async () => {
  // if (!store.getState().posts) {
  //   store.dispatch(userGetInitialPosts());
  //   store.dispatch(END);
  // }
  // await (store as SagaStore).sagaTask?.toPromise();
});
