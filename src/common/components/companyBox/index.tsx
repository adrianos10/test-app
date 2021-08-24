import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';
import { CompanyListItem } from 'src/app/types';
import { getDetailsUrl } from 'src/app/utils/getDetailsUrl';
import styles from './companyBox.module.scss';

function CompanyBox({ company, name, id }: CompanyListItem): JSX.Element {
  const router = useRouter();

  const onBoxClick = useCallback(() => {
    router.push(getDetailsUrl(id.toString()));
  }, [id, router]);

  return (
    <div className={styles.box} onClick={onBoxClick}>
      <div className="font-bold">Name: {company}</div>
      <div className="font-normal">Company: {name}</div>
    </div>
  );
}

export default CompanyBox;
