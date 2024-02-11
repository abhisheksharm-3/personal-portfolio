import BasePage from "@/components/BasePage";
import {
  RiCloseLine,
  RiExternalLinkLine,
  RiMailFill,
  RiPhoneFill,
  RiTriangleFill,
} from "@remixicon/react";
import ContactMeForm from "@/components/ContactMeForm/page";
import FindMeAlsoOnSection from "@/components/FindMeAlsoOnSection/FindMeAlsoOnSection";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_contact-me - Abhishek Sharma",
  description: "",
};

function ContactMe() {
  return (
    <BasePage active="_contact-me">
      <div className="flex flex-row h-screen">
        {" "}
        {/*remove h-screen in case of overflow */}
        <div className="flex flex-col border-r-2">
          <ContactsSection />
          <FindMeAlsoOnSection />
        </div>
        <div className="flex-grow">
          <div className="border-b-2">
            <div className=" border-r-2 max-w-max pr-2 h-fit">
              <div className="flex items-center gap-12 text-fade-text py-2 px-3">
                <span className="">contacts</span>
                <RiCloseLine className="w-[18px] h-[18px] hover:text-white duration-400 cursor-pointer" />{" "}
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <ContactMeForm />
          </div>
        </div>
      </div>
    </BasePage>
  );
}

export default ContactMe;
