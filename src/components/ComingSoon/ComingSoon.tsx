import React from "react";
import Image from "next/image";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <Image
        src={"/illustrations/comingsoon.svg"}
        priority
        width={"650"}
        height={900}
        alt="Image of Robot Being Developed"
      />
      <span className="text-center">🚧 Under Construction 🚧</span>
      <span className="text-center">
        This page is currently under construction. Please pardon our dust and
        check back later for the final reveal!
      </span>
    </div>
  );
}

export default ComingSoon;
