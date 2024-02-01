import BasePage from "@/components/BasePage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_contact-me - Abhishek Sharma",
  description: "",
};

function ContactMe() {
  return (
    <BasePage active="_contact-me">
    Contact Me
    </BasePage>
  )
}

export default ContactMe