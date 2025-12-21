import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Welcome from '@/components/Welcome';

describe('Welcome component test', () => {
  it('renders title', () => {
    render(<Welcome />);
    expect(screen.getByTestId('hello')).toBeInTheDocument();
  });
});