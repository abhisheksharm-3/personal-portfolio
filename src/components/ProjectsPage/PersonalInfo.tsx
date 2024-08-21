import { useAboutMeStore } from '@/lib/useAboutMeStore';
import ExpandableSection from '../ui/ExpandableSection';
import { RiFolder3Fill, RiMarkdownFill } from '@remixicon/react';
import { useExpandableSection } from '@/lib/useExpandableSection';
import { summary, high_school, university, techInterests, nerdy, nonNerdy } from "@/constants/about-me";

const PersonalInfo: React.FC = () => {
  const { expandedSections, actions } = useAboutMeStore();
  const { toggleExpandedSection } = useExpandableSection('personal-info');
  const { setCode, setCurrentViewFinder } = actions;

  return (
    <div className="flex flex-col">
      <ExpandableSection
        title="bio"
        icon={<RiFolder3Fill className="text-[#E99287] size-4" />}
        sectionId="personal-info-bio"
        expanded={expandedSections['personal-info-bio']}
        onToggle={() => toggleExpandedSection('personal-info-bio')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(summary.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>summary</span>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="education"
        icon={<RiFolder3Fill className="text-[#3A49A4] size-4" />}
        sectionId="personal-info-education"
        expanded={expandedSections['personal-info-education']}
        onToggle={() => toggleExpandedSection('personal-info-education')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(high_school.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>highschool</span>
        </div>
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(university.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>university</span>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="interests"
        icon={<RiFolder3Fill className="text-[#43D9AD] size-4" />}
        sectionId="personal-info-interests"
        expanded={expandedSections['personal-info-interests']}
        onToggle={() => toggleExpandedSection('personal-info-interests')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(techInterests.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>tech-interests</span>
        </div>
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(nerdy.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>nerdy-hobbies</span>
        </div>
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            setCurrentViewFinder(true);
            setCode(nonNerdy.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>non-nerdy-hobbies</span>
        </div>
      </ExpandableSection>
    </div>
  );
};

export default PersonalInfo;