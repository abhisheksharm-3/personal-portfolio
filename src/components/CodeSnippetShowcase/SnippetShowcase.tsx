import React from "react";
import Snippet from "./Snippet";

const SnippetShowcase = () => {
  return (
    <div className="flex flex-col w-full px-8 2xl:px-16 gap-4">
      <Snippet />
      <Snippet />
    </div>
  );
};

export default SnippetShowcase;
