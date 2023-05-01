import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  bg?: string;
  disable?: boolean;
  onClick?: () => void;
  border?: string;
  py?: string;
  my?: string;
  radius?: string | number;
}
