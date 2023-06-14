import User from "./User";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  /*  const fetchUser = async () => {
    const {user} = await trpc.user.getUserById.useQuery("0");
    console.log(user);
  };

  useEffect(() => {
    fetchUser();
  }, []); */

  return (
    <>
      <User />
      <hr />
      <UserList />
      <hr />
      <UserForm />
    </>
  );
}

export default App;
