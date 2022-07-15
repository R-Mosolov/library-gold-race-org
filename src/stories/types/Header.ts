export type HeaderUser = {
  name: string;
};

export interface HeaderProps {
  user?: HeaderUser;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}
