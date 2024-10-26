"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  RiMailFill, 
  RiPhoneFill, 
  RiTriangleFill,
  RiCalendarLine 
} from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const ContactsSection = () => {
  const [showContacts, setShowContacts] = useState(true);

  const toggleContacts = () => setShowContacts(!showContacts);

  const contactItems = [
    {
      icon: <RiMailFill className="w-[16px]" />,
      text: "E-Mail Me",
      href: "mai&#108;t&#111;&#58;a%&#54;2%68i&#115;%68ek&#46;r%65%6C&#37;&#54;1y&#101;r%2E&#97;%7&#50;d%65ntl%&#55;9&#51;%344&#64;a&#108;&#37;65ea%73&#46;&#99;&#111;&#109;",
      delay: 0.1
    },
    {
      icon: <RiCalendarLine className="w-[16px]" />,
      text: "Schedule a Meeting",
      href: "https://cal.com/abhisheksan",
      delay: 0.2,
      isExternal: true
    }
  ];

  return (
    <div>
      <motion.div
        className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
        onClick={toggleContacts}
        whileHover={{ backgroundColor: "rgba(30, 45, 61, 0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          animate={{ rotate: showContacts ? 180 : 90 }}
          transition={{ duration: 0.3 }}
        >
          <RiTriangleFill className="w-[8.5px] h-[6px]" />
        </motion.div>
        <span className="pr-0.5">contacts&nbsp;&nbsp;</span>
      </motion.div>
      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 py-4 px-3 text-fade-text lg:border-b-2">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: item.delay }}
                >
                  {item.isExternal ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center hover:text-white duration-400 ease-in-out group"
                    >
                      {item.icon}
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <Link 
                      className="flex gap-2 items-center hover:text-white duration-400 ease-in-out group" 
                      href={item.href}
                    >
                      {item.icon}
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                        {item.text}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactsSection;