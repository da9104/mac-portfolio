// CommonJS - Vitest __mocks__ requirement
const React = require('react');

const Document = ({ children }) => React.createElement('div', { 'data-testid': 'pdf-document' }, children);
const Page = ({ children }) => React.createElement('div', { 'data-testid': 'pdf-page' }, children);
const pdfjs = { workerSrc: '' };

Document.displayName = 'Document';
Page.displayName = 'Page';

module.exports = { Document, Page, pdfjs };
