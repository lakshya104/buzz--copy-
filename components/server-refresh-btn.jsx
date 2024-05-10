"use client";
import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const RefreshBtn = ({title, subTitle}) => {
  const { toast } = useToast()
  const router = useRouter();
  const onClick = () => {
    router.refresh();
    toast({
      title: title,
      description: subTitle,
    })
  };
  return (
    <Button variant="default" className="p-3 font-semibold text-xs" onClick={onClick}>
     Refresh <RefreshCcw className="ml-2 text-sky-700 h-4 w-4"/>
    </Button>
  );
};

export default RefreshBtn;
