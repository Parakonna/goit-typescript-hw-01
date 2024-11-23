export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type NewUserRole = Record<UserRole, string>;

const RoleDescription: NewUserRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};