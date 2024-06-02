import { Title } from "../commons/Title";
import { FormFile } from "./FormFile";

export const UpgradeFile = () => {
  return (
    <div>
      <div className="my-20">
        <Title text={"Cargar material de estudio"} />
      </div>

      <FormFile />
    </div>
  );
};
