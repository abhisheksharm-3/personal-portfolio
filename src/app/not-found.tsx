import BasePage from "@/components/BasePage";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiHomeOfficeLine } from "@remixicon/react";

function NotFound() {
  return (
    <BasePage active="404">
      <div className="flex items-center justify-center flex-col gap-4">
        <Image
          src={"/illustrations/404.svg"}
          width={600}
          height={900}
          alt="Image of Broken Robot"
        />
        <span>Houston, we have a problem!</span>
        <span>
          It seems you&apos;re lost. Let&apos;s navigate back to home.
        </span>
        <Button variant={"secondary"} asChild>
          <Link href="/"><RiHomeOfficeLine />&nbsp;_hello</Link>
        </Button>
      </div>
    </BasePage>
  );
}

export default NotFound;
