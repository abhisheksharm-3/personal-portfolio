"use client";

import { useState } from "react";
import { Link } from 'next-view-transitions';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import Footer from "../Footer/Footer";

function Navbar({ active }: { active: string }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleMobileNavbar = () => {
    setIsNavbarOpen(prev => !prev);
  };

  const navItems = [
    { href: "/", text: "_hello", activeKey: "_hello" },
    { href: "/about-me", text: "_about-me", activeKey: "_about-me" },
    { href: "/projects", text: "_projects", activeKey: "_projects" },
    { href: "/contact-me", text: "_contact-me", activeKey: "_contact-me" },
  ];

  return (
    <>
      <nav className="hidden lg:flex justify-between border-b-2 border-b-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-4">
            <span className="pr-32 flex items-center justify-center">
              abhishek_sharma
            </span>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
                  {
                    "text-white": active === item.activeKey,
                    "border-b-3 border-b-[#FEA55F]": active === item.activeKey,
                  }
                )}
              >
                <span className="cursor-pointer px-6 flex items-center justify-center">
                  {item.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/contact-me">
          <div
            className={cn(
              "border-l-2 border-l-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
              {
                "text-white": active === "_contact-me",
                "border-b-3 border-b-[#FEA55F]": active === "_contact-me",
              }
            )}
          >
            <span className="cursor-pointer px-6 flex items-center justify-center">
              _contact-me
            </span>
          </div>
        </Link>
      </nav>
      <nav className="lg:hidden flex border-b-2 border-b-line text-[15px] text-fade-text">
        <div className="flex items-center justify-between px-4 w-screen">
          <span className="flex items-center justify-center py-5">
            abhishek_sharma
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileNavbar}
          >
            {isNavbarOpen ? (
              <RiCloseLine className="hover:text-[#C4C4C4] duration-400 cursor-pointer" />
            ) : (
              <RiMenuLine className="hover:text-[#C4C4C4] duration-400 cursor-pointer" />
            )}
          </motion.div>
        </div>
        <AnimatePresence>
          {isNavbarOpen && (
            <motion.div
              className="grid grid-rows-[auto,1fr,auto] gap-y-4 h-screen bg-blue-primary w-screen fixed z-50 top-0 left-0"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-4 border-b-2 border-b-line">
                <span className="flex items-center justify-center py-5">
                  abhishek_sharma
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileNavbar}
                >
                  <RiCloseLine className="hover:text-[#C4C4C4] duration-400 cursor-pointer" />
                </motion.div>
              </div>
              <motion.div className="flex flex-col gap-4 text-lg font-light w-screen">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href} onClick={toggleMobileNavbar}>
                      <div className="text-white border-b-2 border-b-line px-4 pb-4">
                        <span>{item.text}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;