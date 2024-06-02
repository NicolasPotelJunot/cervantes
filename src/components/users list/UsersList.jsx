import { Title } from "../commons/Title";
import { FormUser } from "./FormUser";
import { TableUsers } from "./tableUser/TableUsers";

export const UsersList = () => {
  return (
    <div>
      <div className="my-20">
        <Title text={"Listado de usuarios"} />
      </div>

      <FormUser />

      <div className="my-10">
        <TableUsers />
      </div>
    </div>
  );
};
