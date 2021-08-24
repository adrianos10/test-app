import styles from './header.module.scss';
import Link from 'next/link';
import { DASHBOARD_ROUTE } from 'src/app/routes';

function Header(): JSX.Element {
  return (
    <header className={styles.main}>
      <div className="font-bold">
        <Link href={DASHBOARD_ROUTE}>Application Monitor</Link>
      </div>
    </header>
  );
}

export default Header;
