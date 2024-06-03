import { Title } from "../commons/Title";
import { Products } from "./Products";

export const AdministratorProducts = () => {
  return (
    <div className="mx-auto h-screen pt-10">
      <div className="my-20">
        <Title text={"Gestor de productos"} />
      </div>

      <Products />
    </div>
  );
};
