"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import SyntaxHighlighter from "react-syntax-highlighter"; //can use lightasync version but its disturbing styles of code
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import "@/constants/nightOwlContactMe.css"

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
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState(form.getValues());

  useEffect(() => {
    const subscription = form.watch((value) => {
      setFormValues({ name: value.name || '', message: value.message || '', email: value.email || '' });

    });
    return () => subscription.unsubscribe();
  }, [form]);
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: 'Asia/Kolkata',
  };

  const formatter = new Intl.DateTimeFormat("en-IN", options);
  const humanReadableDate = formatter.format(currentDate);
  const formCode = `// 🌟 Real-time Form Magic! 🌟
// This code updates live as you type in the form 😎
  
  const button = document.querySelector('#sendBtn');
  
  // Meet the amazing message object 🎉
  const message = {
    name: "${formValues.name || 'Your Name'}",
    email: "${formValues.email || 'your.email@example.com'}",
    message: "${formValues.message || 'Your awesome message'}",
    date: "${humanReadableDate || 'Today'}"
  };
  
  // When the button is clicked, the form sends its magic message 🪄
  button.addEventListener('click', () => {
    // 📨 Form, meet message!
    form.send(message);
    // 🎉 Message sent! Time to celebrate!
  });
  `;

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/contact/contactme", formData);
      form.reset();
      setIsSubmitted(true);
      setLoading(false);
      setError(false);
    } catch (error) {
      setIsSubmitted(false);
      setLoading(false);
      setError(true);
    }
  };

  const sendNewMessage = () => {
    setIsSubmitted(false);
    form.reset();
    setError(false);
  };

  return (
    <><div className="lg:flex lg:pt-8 lg:justify-center lg:w-1/2 lg:border-r-2"><Form {...form}>
      {isSubmitted ? (
        <div className=" flex flex-col items-center justify-center gap-2">
          <p className="text-[32px]">Thank you! 🤘</p>
          <div className="flex flex-col items-center text-fade-text">
            <p>Your message has been received.</p>
            <p>You will receive an answer really soon!</p>
          </div>
          <Button
            variant={"secondary"}
            className="mt-6"
            onClick={sendNewMessage}
          >
            send-new-message
          </Button>
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-max flex flex-col gap-2 items-start"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel aria-label="Name">_name</FormLabel>
                  <FormControl>
                    <Input className="bg-[#011221] w-[372px]" {...field} />
                  </FormControl>
                  <FormMessage aria-describedby="name-error" />
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
                  <FormLabel aria-label="Email">_email</FormLabel>
                  <FormControl>
                    <Input className="bg-[#011221] w-[372px]" {...field} />
                  </FormControl>
                  <FormMessage aria-describedby="email-error" />
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
                  <FormLabel aria-label="Message">_message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-[#011221] h-40 w-[372px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage aria-describedby="message-error" />
                </FormItem>
              );
            }}
          />
          {error && (
            <div className="text-red-500 text-sm">
              Your message couldn&apos;t be sent. <br /> Please try again or
              <br />{" "}
              <a
                href={`mailto:${process.env.MY_MAIL}`}
                className="underline hover:text-red-400 duration-400"
              >
                send directly using this link
              </a>
              .
            </div>
          )}
          {loading ? (
            <Button variant={"secondary"} disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button variant={"secondary"} disabled={loading} type="submit">
              submit-message
            </Button>
          )}
        </form>
      )}
    </Form></div><div className="lg:w-1/2 hidden lg:block">
      {/* see why styles are not being applied in production */}
        <SyntaxHighlighter className="nightOwl-ContactMe" showLineNumbers={true} useInlineStyles={false} language="js">
          {formCode}
        </SyntaxHighlighter>
      </div></>
  );
};

export default ContactMeForm;
