import { deleteFeedItem } from "@/actions/server-utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { DeleteIcon, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const DeletePostBtn = ({ id }) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const { toast } = useToast();

  const deletePost = () => {
    setDisable(true);

    deleteFeedItem(id);
    router.push("/manage-posts");
    router.refresh();
    toast({
      title: "Post Deleted ",
      description: "Post was deleted successfully!",
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="dangerOutline"
          className="my-2 border-red-600 border-2 mx-5"
        >
          <Trash2 /> <span className="ml-1 font-semibold">Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-inner py-8 rounded-lg px-4 lg:px-12 z-50">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h3 className="font-semibold text-center">
            Are you sure you want to Delete this post?
          </h3>
          <Button
            variant="danger"
            className=" my-2 px-12 "
            onClick={deletePost}
            disabled={disable}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export const CancelEditBtn = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);

  const cancelEdit = () => {
    setDisable(true);
    router.push("/manage-posts");
    router.refresh();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="primaryOutline"
          className="my-2 border-sky-600 border-2 mx-4"
        >
          <DeleteIcon /> <span className="ml-1 font-semibold">Cancel</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-inner py-8 rounded-lg px-4 lg:px-12 z-50">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h3 className="font-semibold text-center">
            Are you sure you want to discard the changes?
          </h3>
          <Button
            variant="superOutline"
            className=" border-indigo-600 border-2 w-[50%]"
            onClick={cancelEdit}
            disabled={disable}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

