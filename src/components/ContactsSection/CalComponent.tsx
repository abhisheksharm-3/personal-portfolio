import { RiCalendarLine } from "@remixicon/react";

export const CalComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="flex items-center gap-2 mb-4">
          <RiCalendarLine className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-medium text-white">Prefer a meeting?</h3>
        </div>
        <p className="text-fade-text text-sm mb-4 text-center">
          Schedule a quick 15-30 minute chat about potential collaboration
        </p>
        <a
          href="https://cal.com/abhisheksan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded hover:bg-primary/90 transition-colors duration-300"
        >
          <RiCalendarLine className="w-4 h-4" />
          Schedule a Meeting
        </a>
      </div>
    );
  };