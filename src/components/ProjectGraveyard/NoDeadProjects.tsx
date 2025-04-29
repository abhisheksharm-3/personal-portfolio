import React from "react";
import { RiGhostSmileLine } from "@remixicon/react";

const NoDeadProjects = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center p-4">
            <RiGhostSmileLine className="text-6xl text-gray-600 mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500 max-w-md">
                No projects match your current filters. Try adjusting your search criteria or check back later when more dead projects are added to this section.
            </p>
        </div>
    );
};

export default NoDeadProjects;