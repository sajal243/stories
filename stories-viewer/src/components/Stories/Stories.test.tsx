import { render, screen } from '@testing-library/react';
import { Stories } from './Stories';
import { IMAGES } from '../../constants/constant';

test('renders correct number of progress bars', () => {
  render(<Stories />);
    const { container } = render(<Stories />);
expect(container.querySelectorAll('.line')).toHaveLength(IMAGES.length);
});

test('shows the first image on initial render', () => {
  render(<Stories />);
  const img = screen.getByRole('img') as HTMLImageElement;
  expect(img.src).toBe(IMAGES[0]);
});
