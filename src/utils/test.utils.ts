// test-utils.js
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }: { children?: ReactNode }) => {
  return children as unknown as JSX.Element;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
