import { useAboutMeStore } from '@/lib/useAboutMeStore';
import ExpandableSection from '../ui/ExpandableSection';
import { useExpandableSection } from '@/lib/useExpandableSection';
import { RiFolder3Fill, RiMarkdownFill, RiFilePdf2Fill } from '@remixicon/react';
import { workExperience, techStack } from "@/constants/about-me";

const ProfessionalInfo: React.FC = () => {
  const { expandedSections, actions } = useAboutMeStore();
  const { toggleExpandedSection } = useExpandableSection('professional-info');
  const {setCurrentViewFinder} = actions;

  const toggleCertificateURL = (pdfUrl: string) => {
    actions.setSelectedPdfUrl(pdfUrl);
    actions.setCurrentViewFinder(false);
  };

  return (
    <div className="flex flex-col">
      <ExpandableSection
        title="experience"
        icon={<RiFolder3Fill className="text-[#E99287] size-4" />}
        sectionId="professional-info-experience"
        expanded={expandedSections['professional-info-experience']}
        onToggle={() => toggleExpandedSection('professional-info-experience')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            actions.setCurrentViewFinder(true);
            actions.setCode(workExperience.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>summary</span>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="tech stack"
        icon={<RiFolder3Fill className="text-[#43D9AD] size-4" />}
        sectionId="professional-info-tech-stack"
        expanded={expandedSections['professional-info-tech-stack']}
        onToggle={() => toggleExpandedSection('professional-info-tech-stack')}
      >
        <div
          className={`text-fade-text flex items-center gap-1 hover:text-white duration-400 ease-in-out`}
          onClick={() => {
            actions.setCurrentViewFinder(true);
            actions.setCode(techStack.details);
          }}
        >
          <RiMarkdownFill className="size-4" />
          <span>details</span>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="certificates"
        icon={<RiFolder3Fill className="text-[#3A49A4] size-4" />}
        sectionId="professional-info-certificates"
        expanded={expandedSections['professional-info-certificates']}
        onToggle={() => toggleExpandedSection('professional-info-certificates')}
      >
        <div className="text-fade-text flex flex-col items-center gap-1 pt-1">
          <div
            className="flex gap-1 hover:text-white duration-400 ease-in-out items-center"
            onClick={() => toggleCertificateURL('/certificates/Java_Infosys.pdf')}
          >
            <RiFilePdf2Fill className="size-4" />
            <span>Core Java by Infosys</span>
          </div>
          <div
            className="flex gap-1 hover:text-white duration-400 ease-in-out items-center"
            onClick={() => toggleCertificateURL('/certificates/AbhishekSharma-NDG Linux Unhatc-certificate (2).pdf')}
          >
            <RiFilePdf2Fill className="size-4" />
            <span>Linux by Cisco</span>
          </div>
          <div
            className="flex gap-1 hover:text-white duration-400 ease-in-out items-center"
            onClick={() => toggleCertificateURL('/certificates/LA For ML Coursera.pdf')}
          >
            <RiFilePdf2Fill className="size-4" />
            <span>Linear Algebra for ML</span>
          </div>
          <div
            className="flex gap-1 hover:text-white duration-400 ease-in-out items-center"
            onClick={() => toggleCertificateURL('/certificates/Meta Front End Developer Certificate.pdf')}
          >
            <RiFilePdf2Fill className="size-4" />
            <span>FE Certificate by Meta</span>
          </div>
          <div
            className="flex gap-1 hover:text-white duration-400 ease-in-out items-center"
            onClick={() => toggleCertificateURL('/certificates/IJNRD2407360.pdf')}
          >
            <RiFilePdf2Fill className="size-4" />
            <span>Research Paper</span>
          </div>
        </div>
      </ExpandableSection>
    </div>
  );
};

export default ProfessionalInfo;