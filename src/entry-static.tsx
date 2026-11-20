import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getPage, missingPage, pages, pageTitle } from './routes';

export const paths = [...Object.keys(pages), '/404.html'];

export async function render(pathname: string) {
  const page = getPage(pathname);
  const Page = await page.load();
  return {
    title: pageTitle(page.label),
    description: page.description,
    indexable: page !== missingPage,
    markup: renderToString(
      <StaticRouter location={pathname}>
        <App initial={{ pathname, Page }} />
      </StaticRouter>,
    ),
  };
}
