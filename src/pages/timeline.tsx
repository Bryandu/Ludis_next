import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useSWRInfinite } from 'swr';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import NewPost from '../components/newPost/newPost';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { userGetInitialPosts } from '../store/ducks/user/userActions';
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
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const posts = useSelector(postSelector);

  const { data, size, setSize } = useSWRInfinite(
    index => `https://jsonplaceholder.typicode.com/photos?_page=${index}`,
    fetcher
  );

  useEffect(() => {
    console.log('size: ' + size);
  }, [size]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const loadMore = () => {
    if (!data) {
      setSize(size + 1);
    }
  };

  return (
    <>
      <Header position="fixed" />
      <TimelineContainer>
        <TimelineLeft>
          <NewPost />
        </TimelineLeft>
        <TimelinePosts>
          {data &&
            data[0]?.map(post => {
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
          {posts?.length ? <div>Não há mais posts</div> : <Spinner />}
          <InfineScroll loadmore={loadMore} />
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
