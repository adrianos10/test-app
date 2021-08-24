import type { GetServerSidePropsResult, NextPage } from 'next';
import { CompanyList } from 'src/app/types';
import CompanyBox from 'src/common/components/companyBox';

import styles from './dashboard.module.scss';

type Props = { companyList: CompanyList };

const Dashboard: NextPage<Props> = ({ companyList }) => {
  return (
    <div className={styles.listing}>
      {companyList.map((company) => (
        <CompanyBox key={company.id} {...company} />
      ))}
    </div>
  );
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  try {
    const companyList = (await (
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/list`)
    ).json()) as CompanyList;

    if (!companyList) {
      throw new Error('No data provided');
    }

    return {
      props: { companyList },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}

export default Dashboard;
