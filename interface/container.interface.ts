import { ReactNode } from "react";
export interface IContainer {
  children: ReactNode;
  width?: number | string;
  px?: number | string;
}
