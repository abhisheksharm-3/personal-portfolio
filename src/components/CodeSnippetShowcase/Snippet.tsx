"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import "@/constants/nightOwl.css";
import { User, Link } from "@nextui-org/react";
import {
  RiChatSmile3Fill,
  RiCloseLine,
} from "@remixicon/react";
import { Separator } from "@/components/ui/separator";
interface SnippetProps {
  data: {
    Code: string;
    Details: string;
  };
}

const Snippet: React.FC<SnippetProps> = ({ data }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const showDetailsToggle = (currentState: boolean) => {
    setIsDetailsOpen(!currentState);
  };
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
        <div
          className="flex cursor-pointer gap-2 justify-center items-center hover:text-white duration-400 ease-in-out text-fade-text"
          onClick={() => showDetailsToggle(isDetailsOpen)}
        >
          <RiChatSmile3Fill /> details{" "}
        </div>
      </div>{" "}
      <div className="">
        <SyntaxHighlighter
          className="p-16 text-sm rounded-xl border"
          useInlineStyles={false}
          language="js"
          wrapLongLines={true}
          customStyle={{
            backgroundColor: "#011221",
          }}
        >
          {data.Code}
        </SyntaxHighlighter>
        {isDetailsOpen ? (
          <div className="flex flex-col gap-2 py-6">
            <Separator />
            <div className=" flex justify-between text-left text-fade-text">
              {data.Details}{" "}
              <RiCloseLine
                className="hover:text-white duration-400 ease-in-out cursor-pointer"
                onClick={() => showDetailsToggle(true)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Snippet;
