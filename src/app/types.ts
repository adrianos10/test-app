export type CompanyListItem = {
  id: number;
  name: string;
  company: string;
};

export type CompanyList = CompanyListItem[];

export type DetailedCompany = {
  id: number;
  name: string;
  logo: string;
  company: string;
  number_of_users: number;
  number_of_active_users: number;
  server_address: string;
  admin: {
    email: string;
    first_name: string;
    last_name: string;
  };
};
