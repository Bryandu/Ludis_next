import { useRouter } from 'next/router';
import { ComponentType, PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../store/ducks/user/userSelectors';

function WithAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
  const WithAuthRedirect = (props: PropsWithChildren<T>) => {
    const router = useRouter();
    const user = useSelector(userSelector);

    useEffect(() => {
      if (!user.isOn) {
        router.push('/');
        return null;
      }
    }, [router, user.isOn]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirect;
}

export default WithAuth;
