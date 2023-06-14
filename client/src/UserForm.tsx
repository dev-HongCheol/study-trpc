import React, { useState } from "react";
import { trpc } from "./trpc";

const UserForm = () => {
  const [name, setName] = useState("");
  const { data, isLoading, refetch } = trpc.user.getUsers.useQuery();
  const mutation = trpc.user.createUser.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ name });
    setName("");
  };

  if (isLoading) return <>loading..</>;

  return (
    <div>
      <ul>
        {(data ?? []).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor={"name"}>Name:</label>
        <input id="name" type="text" value={name} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default UserForm;
