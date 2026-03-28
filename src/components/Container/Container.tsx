import React from "react";

import styled from "./Container.module.css";
interface ContainerProps { children: () React.ReactNode; }
export default function Container({ children }) {
  return <div className={styled.container}>{children}</div>;
}
