import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
// import { END } from 'redux-saga';
import { useSWRInfinite } from 'swr';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import NavMenu from '../components/navmenu/navMenu';
import NewPost from '../components/newPost/newPost';
import Post from '../components/posts/post';
import { Spinner } from '../components/spinner/spiner';
import Toast from '../components/toast/toast';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { /*userGetInitialPosts,*/ userGetMorePosts } from '../store/ducks/user/userActions';
import { postSelector, userSelector } from '../store/ducks/user/userSelectors';
import { Posts } from '../store/ducks/user/userTypes';
import { /*SagaStore,*/ storeWrapper } from '../store/store';
import { Colors } from '../styles/global';
import {
  NavProfile,
  TimelineContainer,
  TimelineLeft,
  TimelinePosts,
  TimelineRight
} from '../styles/timelineStyles';

const Timeline = () => {
  const [toast, setToast] = useState<{ show: boolean; message: string }>();
  const dispatch = useDispatch();
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const user = useSelector(userSelector);
  const posts = useSelector(postSelector);
  const { data, error, size, setSize } = useSWRInfinite(
    index => `http://localhost:3002/posts?_page=${index === 0 ? 1 : index}`,
    fetcher,
    {
      refreshInterval: 30000
    }
  );
  const isLoading =
    (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data && data[size - 1]?.length === 0;
  const isError = error && typeof error !== 'undefined';

  useEffect(() => {
    if (data) {
      dispatch(userGetMorePosts(data?.slice(1, Number.MAX_SAFE_INTEGER)));
    }
  }, [dispatch, data]);

  useEffect(() => {
    toast &&
      setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 5000);
  }, [toast]);

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
      <Toast
        bottom
        colorIcon={toast?.message === 'Created' ? Colors.greenSucsses : Colors.redSecundary}
        Icon={toast?.message === 'Created' ? FiCheckCircle : FiAlertCircle}
        show={toast?.show}>
        {toast?.message === 'Created' ? 'Publicação feita' : 'Falha na publicação'}
      </Toast>
      <Header position="fixed" />
      <TimelineContainer>
        <TimelineLeft>
          <NavMenu>
            <NavProfile>
              <div>
                <Image layout="fill" src="/img/eu.jpg" alt="you" />
              </div>
              <h2>Bryan Willes</h2>
            </NavProfile>

            <NewPost statusPost={setToast} />
          </NavMenu>
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
                  photoUser={user.photoProfile as string}
                />
              )
            );
          })}

          <div className="warnings">
            {isLoading && !isError && <Spinner />}
            {!isLoading && <InfineScroll loadmore={loadMore} />}
            {isEmpty && <p>Acabaram os posts.</p>}
          </div>
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
