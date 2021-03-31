import { ComponentType, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../../components/login/login';
import { userSetToken } from '../../store/ducks/user/userActions';
import { userSelector } from '../../store/ducks/user/userSelectors';

function withAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
  const WithAuthRedirect = (props: PropsWithChildren<T>) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const [token, setToken] = useState<string | null>('loading');

    useEffect(() => {
      const localtoken = localStorage.getItem('token') ?? user.token;
      setToken(localtoken);
    }, [user.token]);

    useEffect(() => {
      token && token !== 'loading' && dispatch(userSetToken(token));
    }, [token, dispatch]);

    switch (token) {
      case 'loading':
        return <></>;
      case null:
        return <Login />;
      default:
        break;
    }

    return <WrappedComponent {...props} {...user} />;
  };

  return WithAuthRedirect;
}

export default withAuth;
