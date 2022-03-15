import { ICustomer } from '../customer/customer.types';

export interface IWarranty {
  _id?: string;
  name: string;
  address: string;
  email?: string;
  contactNo: string;
  state: string;
  city: string;
  pincode: number;
  product: string;
  modelNo: string;
  startDate: string;
  endDate: string;
  wsrNo: string;
  serialNo: string;
  claims: { remark: string; date: string }[];
  customer?: ICustomer | any;
}
