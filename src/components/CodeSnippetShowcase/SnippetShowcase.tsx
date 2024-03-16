import React from "react";
import Snippet from "./Snippet";
import { CodeSnippets } from "@/constants/CodeSnippets";

const SnippetShowcase = () => {
  return (
    <div className="flex flex-col w-full px-8 2xl:px-16 gap-4">
      {CodeSnippets.map((snippet, index) => (
            <Snippet key={index} data={snippet}/>
          ))}
    </div>
  );
};

export default SnippetShowcase;
