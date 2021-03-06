import React from "react";
import { MainContainer } from "@/styles";

type MainProps = {
  children?: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}Main</MainContainer>;
};
