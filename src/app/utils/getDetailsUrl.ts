import { DETAILS_ROUTE, ID_PARAMETER } from '../routes';

export const getDetailsUrl = (id: string): string =>
  DETAILS_ROUTE.replace(ID_PARAMETER, id);
