import { render } from '@testing-library/react';

import SwoReactCheckboxWrapper from './swo-react-checkbox-wrapper';

describe('SwoReactCheckboxWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwoReactCheckboxWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
