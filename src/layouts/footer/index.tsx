import styles from './footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.main}>
      Application Monitor © Copyright 2021
    </footer>
  );
}

export default Footer;
