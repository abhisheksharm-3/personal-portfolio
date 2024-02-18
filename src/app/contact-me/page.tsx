import BasePage from "@/components/BasePage";
import { Code } from "bright";
import { myTheme } from "@/constants/ContactmeCodeHighlighter";
import { RiCloseLine } from "@remixicon/react";
import ContactMeForm from "@/components/ContactMeForm/page";
import FindMeAlsoOnSection from "@/components/FindMeAlsoOnSection/FindMeAlsoOnSection";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_contact-me - Abhishek Sharma",
  description: "",
};

Code.theme = myTheme;
Code.lineNumbers = true;

const currentDate = new Date();

const options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: 'Asia/Kolkata',
};

const formatter = new Intl.DateTimeFormat("en-IN", options);
const humanReadableDate = formatter.format(currentDate);

const ContactMe = () => {
  //TODO: TRY TO OVERCOME TECHNICAL PROBLEMS OF CODE UPDATE IN REALTIME
  const formCode = ` //this code doesn't update in realtime 
// due to tech stack limitations, YET 😜
  const button = document.querySelector('#sendBtn');

  const message = {
    name: "Your Name Here",
    email: "Your Email Here",
    message: "Your Message Here",
    date: "${humanReadableDate}"
  }
  
  button.addEventListener('click', () => {
    form.send(message);
  })`;
  return (
    <BasePage active="_contact-me">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row h-screen">
        {" "}
        {/*remove h-screen in case of overflow */}
        <div className="flex flex-col border-r-2">
          <ContactsSection />
          <FindMeAlsoOnSection />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="border-b-2">
              <div className=" border-r-2 max-w-max pr-2 h-fit">
                <div className="flex items-center gap-12 text-fade-text py-2 px-3">
                  <span className="">contacts</span>
                  <RiCloseLine className="w-[18px] h-[18px] hover:text-white duration-400 cursor-pointer" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-grow h-full">
            <div className="flex pt-8 justify-center w-1/2 border-r-2">
              <ContactMeForm />
            </div>
            <div className="w-1/2">
              <Code className="rounded-lg" lang="js">
                {formCode}
              </Code>
            </div>
            <div className="px-2 border-l-2 text-fade-text flex items-center">
              a<br />b<br />h<br />i<br />s<br />h<br />e<br />k<br />
              <br />s<br />h<br />a<br />r<br />m<br />a
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="flex flex-col gap-4 h-screen py-4 lg:hidden overflow-hidden">
        <div className="flex px-4">_contact-me</div>
        <div className="flex flex-col gap-1 overflow-auto">
          <ContactsSection />
          <FindMeAlsoOnSection />
        </div>
        <div className="w-full flex items-center justify-center">
          <ContactMeForm />
        </div>
      </div>
    </BasePage>
  );
};

export default ContactMe;
