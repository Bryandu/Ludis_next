import { ComponentType, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../../components/login/login';
import { Spinner } from '../../components/spinner/spinner';
import { userSetToken } from '../../store/ducks/user/userActions';
import { userSelector } from '../../store/ducks/user/userSelectors';

function withAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
  const WithAuthRedirect = (props: PropsWithChildren<T>) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const [token, setToken] = useState<string | undefined | null>('loading');

    useEffect(() => {
      const localtoken = localStorage.getItem('token') ?? user.user?.token;
      setToken(localtoken);
    }, [user.user?.token, token]);

    useEffect(() => {
      token && token !== 'loading' && dispatch(userSetToken(token));
    }, [token, dispatch]);

    switch (token) {
      case 'loading':
        return (
          <>
            <Spinner />
          </>
        );
      case null:
        return <Login />;
      case undefined:
        return <Login />;
      default:
        break;
    }

    return <WrappedComponent {...props} {...user} />;
  };

  return WithAuthRedirect;
}

export default withAuth;
