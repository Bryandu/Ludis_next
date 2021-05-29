import { render } from '@testing-library/react';

import Anchor from '../../../components/anchor/anchor';

describe('<Anchor />', () => {
  it('should render as a Text style', () => {
    const { getByTestId } = render(<Anchor href="/">text</Anchor>);

    expect(getByTestId('anchor_text')).toBeTruthy();
  });

  it('should render as a Button style', () => {
    const { getByTestId } = render(
      <Anchor button href="/">
        text
      </Anchor>
    );

    expect(getByTestId('anchor_button')).toBeTruthy();
  });

  it('should prop href be passed to anchor element', () => {
    const { getByTestId } = render(
      <Anchor button href="/singup">
        text
      </Anchor>
    );

    expect(getByTestId('anchor_button').getAttribute('href')).toBe('/singup');
  });
});
