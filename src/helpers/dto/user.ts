interface Language {
  id: number;
  name: string;
}

interface Role {
  id: number;
  name: string;
  canAddUser: boolean;
  canUpdateUser: boolean;
  canDeleteUser: boolean;
  canAddCamera: boolean;
  canUpdateCamera: boolean;
  canDeleteCamera: boolean;
  canAddCompany: boolean;
  canUpdateCompany: boolean;
  canDeleteCompany: boolean;
  canAddProject: boolean;
  canUpdateProject: boolean;
  canDeleteProject: boolean;
}

interface User {
  id: number;
  uuid: string;
  name: string;
  surname: string | null;
  passwordStr: string | null;
  email: string;
  language: Language;
  phoneNumber: string | null;
  company: any; // You might want to replace this with a specific type if company has a defined structure
  role: Role;
  projects: any[] | null; // You might want to replace this with a specific type if projects has a defined structure
}

interface IUserResponse {
  message?: string;
  data: User[];
}

interface IUserForm {
  name: string;
  surname: string;
  passwordStr: string;
  email: string;
  language: {
    id: 1 | 2 | 3;
  };
  role: {
    id: 1 | 2 | 3;
  };
  projects: [
    {
      id: number;
    }
  ];
}

export type { IUserResponse, User, IUserForm };
