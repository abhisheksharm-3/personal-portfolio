"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { format } from "path/posix";
import { Textarea } from "../ui/textarea";

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactMeForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <div className="text-fade-text flex flex-row items-center justify-center">
      <div className="w-1/2 border-r-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-max flex flex-col gap-4 items-start justify-center px-3 m-auto"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>_name</FormLabel>
                    <FormControl>
                      <Input className="bg-[#011221] w-[372px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>_email</FormLabel>
                    <FormControl>
                      <Input className="bg-[#011221] w-[372px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>_message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-[#011221] h-56 w-[372px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button variant={"secondary"} type="submit">
              submit-message
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default ContactMeForm;
