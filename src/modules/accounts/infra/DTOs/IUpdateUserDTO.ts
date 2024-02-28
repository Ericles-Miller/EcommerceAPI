export interface IUpdateUserDTO {
  name: string;
  password: string;
  id: string;
  roles?: string[];
  permissions?: string[];
}

export interface IUpdateRolesAndPermissions {
  id: string;
  roles?: string[];
  permissions?: string[];
}
