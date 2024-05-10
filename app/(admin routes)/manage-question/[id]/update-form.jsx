import UpdateFormCard from "./update-form-card";
import UpdateFormHeading from "./update-form-heading";

export const UpdateForm = ({ feedId, quesData }) => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col py-4 px-2 lg:px-4">
      <UpdateFormHeading feedId={feedId} />
      <div className="flex w-full flex-wrap -m-4 justify-center items-start">
        {quesData.map((item) => (
          <div key={item.id} className="p-4 w-full sm:w-1/2 xl:w-1/3">
            <UpdateFormCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
