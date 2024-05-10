import React, {ReactNode} from "react";
import { Navigate } from "react-router-dom";
interface PrivateMapProps {
    children: ReactNode;
  }

export const PrivateMap = ({ children }: PrivateMapProps) => {
  const token = localStorage.getItem("token");
  return <div>{token ? children : <Navigate to="/" />}</div>;
};
