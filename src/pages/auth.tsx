import Login from "@/components/form/Login";
import Register from "@/components/form/Register";
import { NextPageContext } from "next";
import * as React from "react";

interface IAuthProps {
  tab: string;
}

const Auth: React.FunctionComponent<IAuthProps> = ({ tab }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-2xl font-bold text-center mt-4 mb-4">
        <h1>Auth Page</h1>
      </div>

      {tab === "signin" ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const tab = query.tab ?? "signin";
  return {
    props: { tab: JSON.parse(JSON.stringify(tab)) },
  };
};
