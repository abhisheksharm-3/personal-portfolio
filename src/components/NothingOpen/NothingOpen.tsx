import Image from "next/image";

const NothingOpen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center text-center px-2">
      <Image
        src={"/illustrations/relax.svg"}
        height={300}
        width={600}
        alt="Nothing to See Here"
      />
      <p className="mt-4 text-lg font-medium text-gray-600">
        Uh-oh! Looks like there&apos;s nothing to see here...
      </p>
      <p className="mt-2 text-gray-500">
        Time to put on your exploring hat and click on the left side to learn something fun about me!
      </p>
    </div>
  );
};

export default NothingOpen;
