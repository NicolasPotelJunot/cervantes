import { Title } from "../commons/Title";
import { FormFilters } from "./filters/FormFilters";
import { TableDocuments } from "./tableDocuments/TableDocuments";

export const AdministrationDocuments = () => {
  return (
    <div className="mx-auto h-screen pt-10">
      <div className="my-20">
        <Title text={"Buscar material de estudio"} />
      </div>

      <div className="flex flex-col gap-5">
        <FormFilters />

        <TableDocuments />
      </div>
    </div>
  );
};
