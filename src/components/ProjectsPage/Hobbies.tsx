import { useAboutMeStore } from '@/lib/useAboutMeStore';
import ExpandableSection from '../ui/ExpandableSection';
import { RiFolder3Fill, RiMarkdownFill } from '@remixicon/react';
import { useExpandableSection } from '@/lib/useExpandableSection';
import { nerdy, nonNerdy } from "@/constants/about-me";

const Hobbies: React.FC = () => {
  const { expandedSections, actions } = useAboutMeStore();
  const { toggleExpandedSection } = useExpandableSection('hobbies');

  return (
    <div className="flex flex-col">
      <ExpandableSection
        title="nerdy"
        icon={<RiFolder3Fill className="text-[#E99287] size-4" />}
        sectionId="hobbies-nerdy"
        expanded={expandedSections['hobbies-nerdy']}
        onToggle={() => toggleExpandedSection('hobbies-nerdy')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            actions.setCurrentViewFinder(true);
            actions.setCode(nerdy.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>nerdy-hobbies</span>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="non-nerdy"
        icon={<RiFolder3Fill className="text-[#43D9AD] size-4" />}
        sectionId="hobbies-non-nerdy"
        expanded={expandedSections['hobbies-non-nerdy']}
        onToggle={() => toggleExpandedSection('hobbies-non-nerdy')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            actions.setCurrentViewFinder(true);
            actions.setCode(nonNerdy.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>non-nerdy-hobbies</span>
        </div>
      </ExpandableSection>
    </div>
  );
};

export default Hobbies;