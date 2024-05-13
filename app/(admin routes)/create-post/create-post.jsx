"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { createFeedItem } from "@/actions/redeem";
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
import { postFormSchema } from "@/schemas";
import { ArrowLeft } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";
import { NavTooltip } from "@/components/nav-tooltip";

export const CreatePost = ({ userId }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);

  const form = useForm({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      type: "",
      title: "",
      description: "",
      subTitle: "",
      url: "",
      link: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    createFeedItem(
      userId,
      values.title,
      values.description,
      values.url,
      values.subTitle,
      values.link,
      values.type
    );
    setDisable(true);
    router.push("/dashboard");
    router.refresh();
    toast({
      title: "Post Created ",
      description: "Post was created successfully!",
    });
  }

  return (
    <div>
      <div className="bg-white max-w-2xl my-3 flex lg:space-y-0 space-x-5 lg:flex-row items-center justify-evenly lg:ml-2 lg:z-40">
        <ProgressBarLink href="/dashboard" className="w-[30%] ml-2">
          <NavTooltip content={"Go back to Dashboard page"}>
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
          Create Post
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl  p-8"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Types</SelectLabel>
                      <SelectItem value="VIDEO">VIDEO</SelectItem>
                      <SelectItem value="BLOG_POST">BLOG_POST</SelectItem>
                      <SelectItem value="IMAGE">IMAGE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription>Choose the type of your post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormDescription>
                  This will be title of your post.
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
                  This will be description of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-Title</FormLabel>
                <FormControl>
                  <Input placeholder="subtitle" {...field} />
                </FormControl>
                <FormDescription>
                  This will be subtitle of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url</FormLabel>
                <FormControl>
                  <Input placeholder="url" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the url of either an image or video of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="link" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the link where you want to redirect the user.
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
            Create Post
          </Button>
        </form>
      </Form>
    </div>
  );
};
