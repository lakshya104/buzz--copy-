"use client";
import { deleteQuestionWithAnswers } from "@/actions/redeem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteQuestionBtn = ({ id }) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const { toast } = useToast();

  const deleteQuestion = () => {
    setDisable(true);
    deleteQuestionWithAnswers(id);
    router.refresh();
    toast({
      title: "Question Deleted ",
      description: "Question with answers deleted successfully!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="dangerOutline"
          className="my-2 w-full border-red-600 border-2 border-b-4"
        >
          <Trash2 /> <span className="ml-1 font-semibold">Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-inner py-8 rounded-lg px-4 lg:px-12 z-50">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h3 className="font-semibold text-center">
            Are you sure you want to Delete this question?
          </h3>
          <Button
            variant="danger"
            className=" my-2 px-12 "
            onClick={deleteQuestion}
            disabled={disable}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteQuestionBtn;
