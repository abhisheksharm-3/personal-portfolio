import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import "@/constants/nightOwl.css";
import { User, Link } from "@nextui-org/react";
import { RiChatSmile3Fill, RiChatSmile3Line } from "@remixicon/react";
import { CodeSnippets } from "@/constants/CodeSnippets";

const Snippet = () => {
  return (
    <div className="flex flex-col gap-1 pt-2">
      <div className="flex flex-row justify-between">
        <div>
          <User
            name="Abhishek Sharma"
            className="text-blue-text"
            description={
              <Link
                href="https://github.com/abhisheksharm-3/"
                size="sm"
                isExternal
              >
                @abhisheksharm-3
              </Link>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/95611197?v=4",
            }}
          />
        </div>{" "}
        <div className="flex cursor-pointer gap-2 justify-center items-center hover:text-white duration-400 ease-in-out">
          <RiChatSmile3Fill /> details{" "}
        </div>
      </div>{" "}
      <div className="">
        
          <SyntaxHighlighter
            className="p-16 rounded-lg "
            useInlineStyles={false}
            language="js"
            wrapLongLines={true}
          >
            {CodeSnippets[0].Code}
          </SyntaxHighlighter>
        
      </div>
    </div>
  );
};

export default Snippet;
