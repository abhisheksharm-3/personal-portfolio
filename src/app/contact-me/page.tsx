import BasePage from "@/components/BasePage";
import { RiCloseLine, RiTriangleFill } from "@remixicon/react";
import ContactMeForm from "@/components/ContactMeForm/page";
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
        <div className="flex flex-col">
          <div className="flex items-center gap-2 pr-40 border-r-2 border-b-2 py-2 px-3 cursor-pointer">
            <RiTriangleFill className="rotate-180 w-[8.5px] h-[6px]" />{" "}
            <span className="pr-0.5">contacts&nbsp;&nbsp;</span>
          </div>
          <div></div>
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
