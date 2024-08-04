import Image from 'next/image';

const NoProjectsYet = () => (
  <div className="w-full h-full flex flex-col items-center py-10 text-center px-2 overflow-y-scroll scrollbar-hide">
    <Image
      src="/illustrations/idea.svg"
      alt="Under construction"
      height={300}
        width={600}
    />
    <p className="w-full mt-4 text-lg text-fade-text text-center">
      Oops! Looks like you caught me mid-build.
    </p>
    <p className="w-full mt-2 text-md text-fade-text text-center">
      I&apos;m currently crafting some awesome projects to showcase here.
    </p>
  </div>
);

export default NoProjectsYet;