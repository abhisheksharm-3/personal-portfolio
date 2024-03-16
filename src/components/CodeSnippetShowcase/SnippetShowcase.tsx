import React from "react";
import Snippet from "./Snippet";
import { Separator } from "@/components/ui/separator";

const SnippetShowcase = () => {
  return (
    <div className="flex flex-col w-full px-8 2xl:px-16 gap-4">
      <Snippet /> <Separator />
      <Snippet />
    </div>
  );
};

export default SnippetShowcase;
