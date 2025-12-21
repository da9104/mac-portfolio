// Mock pdfjs-dist to prevent DOMMatrix errors
module.exports = {
  getDocument: () => Promise.resolve({ getPage: () => Promise.resolve({}) }),
  GlobalWorkerOptions: { workerSrc: '' }
};
