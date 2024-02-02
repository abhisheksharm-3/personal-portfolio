import React from "react";
import Image from "next/image";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <Image
        src={"/illustrations/comingsoon.svg"}
        priority
        width={700}
        height={900}
        alt="Image of Robot Being Developed"
      />
      <span>This Page is Still Being Developed.</span>
      <span>Visit Back Soon.</span>
    </div>
  );
}

export default ComingSoon;
