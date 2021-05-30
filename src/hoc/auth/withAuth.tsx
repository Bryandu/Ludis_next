import { ComponentType, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/ducks/user/userSlice';
import { UserState } from 'store/ducks/user/userTypes';

import Login from '../../components/login/login';
import { Spinner } from '../../components/spinner/spinner';

function withAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
  const WithAuthRedirect = (props: PropsWithChildren<T>) => {
    const dispatch = useDispatch();
    const userState = useSelector((state: UserState) => state);
    const [token, setLocalToken] = useState<string | null | undefined>('loading');

    useEffect(() => {
      const localtoken = localStorage.getItem('token') ?? userState.user?.token;
      setLocalToken(localtoken);
    }, [userState, userState.user?.token, token]);

    useEffect(() => {
      token && token !== 'loading' && dispatch(setToken(token));
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

    return <WrappedComponent {...props} {...userState} />;
  };

  return WithAuthRedirect;
}

export default withAuth;
