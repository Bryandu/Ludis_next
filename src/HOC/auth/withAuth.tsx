import { useRouter } from 'next/router';
import { ComponentType, memo, PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../store/ducks/user/userSelectors';

function withAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
  const WithAuthRedirect = (props: PropsWithChildren<T>) => {
    const router = useRouter();
    const user = useSelector(userSelector);

    useEffect(() => {
      // if (!localStorage.getItem('token')) {
      //   router.push({ pathname: '/', query: 'error' });
      // }
      // if (!user?.isOn) {
      //   router.push({ pathname: '/', query: 'error' });
      // }
    }, [router]);

    return <WrappedComponent {...props} {...user} />;
  };

  return WithAuthRedirect;
}

export default withAuth;
