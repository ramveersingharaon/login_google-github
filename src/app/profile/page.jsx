import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const PrivatePage = async () => {
  const getSession = await auth();


  if (!getSession?.user) redirect("/login");

  return (
    <div className="w-full my-6">
      <div className="max-w-[1240px] mx-auto">
        This is my Profile Page.
        <h1> User Name: {getSession?.user?.name}</h1>
        <h1> User Email: {getSession?.user?.email}</h1>
      </div>
    </div>
  );
};

export default PrivatePage;
