import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
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
import { userSelector } from '../store/ducks/user/userSelectors';
import { Posts } from '../store/ducks/user/userTypes';
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
  const fetcher = (url: string) => GET<Posts[]>(url).then(res => res?.data);
  const user = useSelector(userSelector);
  const { data, error, size, setSize } = useSWRInfinite(
    index => `http://localhost:3002/posts?_page=${index}`,
    fetcher,
    {
      refreshInterval: 30000
    }
  );
  const isLoading =
    (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data && data[size - 1]?.length === 0;
  const timeoutToast = (e: { show: boolean; message: string } | undefined) => {
    setToast(e);
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 10000);
  };

  const loadMore = useCallback(() => {
    if (!isLoading && !isEmpty) {
      setSize(size => size + 1);
    }
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
          <NavProfile>
            <div>
              <Image layout="fill" src="/img/eu.jpg" alt="you" />
            </div>
            <h2>Bryan Willes</h2>
          </NavProfile>
          <NavMenu>
            <NewPost statusPost={timeoutToast} />
            <div></div>
          </NavMenu>
        </TimelineLeft>
        <TimelinePosts>
          {data
            ?.slice(1, Number.MAX_SAFE_INTEGER)
            ?.flat(1)
            ?.map(post => {
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
            {isLoading && !error && <Spinner />}
            {!isLoading && data && <InfineScroll loadmore={loadMore} />}
            {isEmpty && <p>Acabaram os posts.</p>}
          </div>
        </TimelinePosts>
        <TimelineRight></TimelineRight>
      </TimelineContainer>
    </>
  );
};

export default withAuth(Timeline);
