interface ICompanyResponse {
  message?: string;
  data: {
    entities: ICompany[];
    totalCount: 1;
  };
  ok: boolean;
}

interface ICompany {
  id: number;
  uuid: string;
  name: string;
  subscriptionDeadlineStr?: string;
  subscriptionDeadline: string;
  address?: string;
  email?: string;
  phone?: string;
  representer?: string;
}

export type { ICompany, ICompanyResponse };
