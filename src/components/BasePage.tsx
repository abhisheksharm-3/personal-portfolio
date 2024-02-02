import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const BasePage = ({
  className,
  children,
  active,
}: {
  className?: string;
  children: ReactNode;
  active: string;
}) => {
  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col justify-between font-fira bg-blue-primary",
        className
      )}
    >
      {/* TODO: use context to avoid prop drilling */}
      <Navbar active={active} />
      {children}
      <Footer />
    </div>
  );
};

export default BasePage;
