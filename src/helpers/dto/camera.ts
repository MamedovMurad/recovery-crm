interface Company {
  id: number;
  uuid: string;
  name: string;
  subscriptionDeadlineStr: string | null;
  subscriptionDeadline: string;
}

interface Project {
  id: number;
  name: string;
  startDateStr: string | null;
  endDateStr: string | null;
  company: Company;
}

interface Camera {
  accessToken: string;
  hostname: string;
  id: number;
  ip: string;
  lastConInSec?: number;
  lastFileUrl?: string;
  lastPhotoInSec?: string;
  lastPingValue?: number;
  lastUsbConInSec?: number;
  location?: string;
  modelInfo: string;
  name: string;
  number: string;
  port: string;
  project: any;
  raspberryOs: string;
  raspberryPassword: string;
  sshUsername: string;
  totalStorage?: number;
  usedStorage?: number;
  vncId: string;
  vncPassword: string;
}

interface ICameraForm {
  name: string;
  ip: string;
  port: string;
  raspberryPassword: string;
  raspberryOs: string;
  vncId: null | number | string;
  vncPassword: null | string;
  modelInfo: null | string;
  number: null | number | string;
  hostname: null | number;
  sshUsername: string;
}

interface ICameraResponse {
  data: { entities: Camera[] };
  message?: string;
}
export type { Camera, Project, Company, ICameraResponse, ICameraForm };
