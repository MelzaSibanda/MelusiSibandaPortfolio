import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getPage } from './routes';
import './index.css';
import './styles/custom.css';
import './styles/portfolio.css';

const root = document.getElementById('root');
if (root) {
  const pathname = window.location.pathname;
  const app = (initial?: Parameters<typeof App>[0]['initial']) => (
    <BrowserRouter>
      <App initial={initial} />
    </BrowserRouter>
  );
  if (root.dataset.route === pathname) {
    getPage(pathname)
      .load()
      .then((Page) => hydrateRoot(root, app({ pathname, Page })))
      .catch(() => createRoot(root).render(app()));
  } else {
    createRoot(root).render(app());
  }
}
