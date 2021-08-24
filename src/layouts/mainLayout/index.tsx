import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';

import styles from './mainLayout.module.scss';

function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <article className={styles.article}>
      <Header />
      <main className="px-7 my-7">{children}</main>
      <Footer />
    </article>
  );
}

export default MainLayout;
