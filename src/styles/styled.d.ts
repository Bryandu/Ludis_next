import {} from 'styled-components';

import { theme } from './theme';

declare module 'styled-components' {
  type Theme = typeof theme.dark;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
