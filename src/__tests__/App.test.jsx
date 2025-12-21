import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// ✅ COMPLETE MOCK - Handles GlobalWorkerOptions
vi.mock('react-pdf', () => ({
  Document: ({ children }) => <div data-testid="pdf-document">{children}</div>,
  Page: ({ children }) => <div data-testid="pdf-page">{children}</div>,
  pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: ''
    }
  }
}));

// Mock pdfjs-dist internals
vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {
    workerSrc: ''
  },
  getDocument: vi.fn(() => Promise.resolve({ getPage: vi.fn(() => Promise.resolve({})) }))
}));

import App from '../App.jsx';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Dami K')).toBeInTheDocument();
  });
});
