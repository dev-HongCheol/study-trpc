import React from "react";
import { trpc } from "./trpc";

const UserList = () => {
  const { data, isLoading } = trpc.user.getUsers.useQuery();

  if (isLoading) return <>Loading..</>;
  return (
    <ul>
      {(data ?? []).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
