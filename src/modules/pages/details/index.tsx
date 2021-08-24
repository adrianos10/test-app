import { GetServerSideProps, NextPage } from 'next';
import { DetailedCompany } from 'src/app/types';

type Props = {
  companyData: DetailedCompany;
};

const Details: NextPage<Props> = ({ companyData }) => {
  const {
    name,
    company,
    number_of_active_users,
    number_of_users,
    server_address,
    logo,
  } = companyData;

  return (
    <div>
      <div>
        {/* FIXME */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="logo" />
      </div>
      <div>Name: {name}</div>
      <div>Company: {company}</div>
      <div>Active users: {number_of_active_users}</div>
      <div>Number of users: {number_of_users}</div>
      <div>Server address: {server_address}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props, { id: string }> =
  async (context) => {
    const { params } = context;

    if (params) {
      try {
        const companyData = (await (
          await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_HOST}/details/${params.id}`
          )
        ).json()) as DetailedCompany;

        return { props: { companyData } };
      } catch (error) {
        console.log(error);

        return {
          notFound: true,
        };
      }
    }

    return {
      notFound: true,
    };
  };

export default Details;
