import { useEffect } from 'react';

import Header from '../components/header/header';
import InfineScroll from '../components/infinitescroll/infinitescroll';
import WithAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { UserState } from '../store/ducks/user/userTypes';
import { TimelineContainer, TimelinePosts } from '../styles/timelineStyles';

const Timeline = ({ data }: UserState) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  async function loadMore() {
    const response = await GET('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  }

  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelinePosts>
          <p>{data.email}</p>
          <p>{data.password}</p>

          <InfineScroll loadmore={loadMore} />
        </TimelinePosts>
      </TimelineContainer>
    </>
  );
};

export default WithAuth(Timeline);
