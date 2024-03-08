import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary fallback={<p>error!</p>}>
        <React.Suspense fallback={null}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
);
