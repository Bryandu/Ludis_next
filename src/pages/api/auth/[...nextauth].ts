import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { GET } from '../../../service/axios';

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async credentials => {
      try {
        let user = null;
        const { data } = await GET(
          `user/?email=${credentials.email}&password=${credentials.password}`
        );
        data[0] ? (user = data[0]) : (user = null);
        if (user) {
          return user;
        }
      } catch (e) {
        throw new Error(e);
      }
    }
  })
];

const pages = {
  error: '/'
};

const callbacks = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn(user, account, profile) {
    return true;
  },

  // Getting the JWT token from API response
  async jwt(token, user) {
    if (user) {
      token.accessToken = Math.random();
    }
    return token;
  },

  async session(session, token) {
    session.accessToken = token.accessToken;
    return session;
  }
};

const options = {
  providers,
  callbacks,
  pages
};

export default (req, res) => NextAuth(req, res, options);
