import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Readonly<Props>) {
  return <div>{children}</div>;
}

export default AuthLayout;
