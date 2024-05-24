"use client";
import { deleteReward } from "@/actions/server-utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ProgressBarLink } from "@/components/progress-bar";

const UpdateRewardBtn = ({ id, name }) => {
  return (
    <div className="w-full flex-col flex justify-center items-center lg:flex-row lg:space-x-6 mt-2">
      {" "}
     <ProgressBarLink href={`/manage-rewards/edit-reward/${id}?name=${name}`}>
     <Button variant="superOutline" className="w-24 border border-indigo-500">
        Edit
      </Button>
     </ProgressBarLink>
      <DeleteBtn id={id} />
    </div>
  );
};

export default UpdateRewardBtn;

const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const { toast } = useToast();

  const deleteRewardFun = () => {
    setDisable(true);

    deleteReward(id);
    router.refresh();
    toast({
      title: "Reward Deleted ",
      description: "Reward was deleted successfully!",
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="dangerOutline"
          className="my-2 border-red-600 border-2 mx-5"
        >Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-inner py-8 rounded-lg px-4 lg:px-12 z-50">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h3 className="font-semibold text-center">
            Are you sure you want to Delete this reward?
          </h3>
          <Button
            variant="danger"
            className=" my-2 px-12 "
            onClick={deleteRewardFun}
            disabled={disable}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
