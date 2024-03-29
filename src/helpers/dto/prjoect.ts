interface IPrjoectWithCompanyResponse {
  message?: string;
  data: {
    entities: [];
    totalCount: number;
  };
  ok: true;
}

interface IProjectWithCompnay {
  id: 2;
  name: "GM Nizami Bina";
  startDateStr: "2023-10-01T00:00:00";
  endDateStr: "2024-01-01T00:00:00";
  company: {
    id: 1;
    uuid: null;
    name: "GM Construction";
    subscriptionDeadlineStr: null;
    subscriptionDeadline: null;
  };
}

interface IPorject {
  company?: { name: string };
  daysOfWeek: [];
  endDateStr: string;
  endTime: null | string;
  id: number;
  name: string;
  photoIntervalInMinute: null | string;
  startDateStr: string;
  startTime: null | string;
}

export type { IPrjoectWithCompanyResponse, IProjectWithCompnay, IPorject };
