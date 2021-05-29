import { render } from '@testing-library/react';

import Button from '../../../components/button/button';

describe('<Button />', () => {
  it('should render as outline', () => {
    const { getByText } = render(
      <Button name="teste" outline>
        btn outline
      </Button>
    );

    expect(getByText('btn outline')).toBeInTheDocument();
  });
});
