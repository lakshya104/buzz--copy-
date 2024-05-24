"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { updateReward } from "@/actions/server-utils";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";
import { NavTooltip } from "@/components/nav-tooltip";
import { rewardFormSchema } from "@/schemas";

export const EditRewardForm = ({ name, id, data }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);

  const form = useForm({
    resolver: zodResolver(rewardFormSchema),
    defaultValues: {
      name: data.name,
      description: data.description,
      image: data.image,
      text: data.text,
      couponCode: data.couponCode,
      isActive: String(data.isActive),
    },
  });

  function onSubmit(values) {
    const isActiveBoolean = values.isActive === 'true';
    const updatedRewardData = {
      ...values,
      id: id,
      isActive: isActiveBoolean,
    };
    updateReward(updatedRewardData);
    setDisable(true);
    router.push("/manage-rewards");
    router.refresh();
    toast({
      title: "Reward Updated ",
      description: "Reward was updated successfully!",
    });
  }

  return (
    <div>
      <div className="bg-white max-w-2xl my-3 flex lg:space-y-0 space-x-5 lg:flex-row items-center justify-evenly lg:ml-2 lg:z-40">
        <ProgressBarLink href="/manage-rewards" className="w-[20%] ml-2">
          <NavTooltip content={"Go back to Manage Rewards page"}>
            <Button
              variant="ghost"
              className="border border-neutral-300"
              size="sm"
            >
              <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
            </Button>
          </NavTooltip>
        </ProgressBarLink>
        <h1 className="lg:text-3xl w-[60%] text-xl font-bold text-gray-800">
          Edit Reward : <span className="text-sky-800">{name}</span>
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl  p-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This will be name of your reward.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Input placeholder="text" {...field} />
                </FormControl>
                <FormDescription>
                  This will be sun heading of your reward.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write description here"
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This will be description of your reward.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Link</FormLabel>
                <FormControl>
                  <Input placeholder="image link" {...field} />
                </FormControl>
                <FormDescription>
                  This will be image link of your reward.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Active</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Is Active ?</SelectLabel>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the current status of the reward
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="couponCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon Code</FormLabel>
                <FormControl>
                  <Input placeholder="code" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the coupon code of your reward.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="superOutline"
            type="submit"
            className="w-[50%] border border-indigo-600"
            disabled={disable}
          >
            Update Reward
          </Button>
        </form>
      </Form>
    </div>
  );
};
