import React from "react";
import { trpc } from "./trpc";

const User = () => {
  const { data, isLoading } = trpc.user.getUserById.useQuery("0");

  if (isLoading) return <>Loading..</>;
  else return <div>{data?.name}</div>;
};

export default User;
