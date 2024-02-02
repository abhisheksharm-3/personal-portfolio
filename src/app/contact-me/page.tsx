import BasePage from "@/components/BasePage";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_contact-me - Abhishek Sharma",
  description: "",
};

function ContactMe() {
  return (
    <BasePage active="_contact-me">
      <ComingSoon />
    </BasePage>
  );
}

export default ContactMe;
