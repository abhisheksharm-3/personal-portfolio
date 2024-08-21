import { RiArrowRightSLine, RiTriangleFill } from '@remixicon/react';

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactElement;
  sectionId: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  icon,
  sectionId,
  expanded,
  onToggle,
  children,
}) => {
  return (
    <div className="flex cursor-pointer hover:text-white duration-400 ease-in-out">
      <RiArrowRightSLine
        className={`rotate-${expanded ? '90' : '0'} transition-transform`}
        onClick={onToggle}
      />
      <div className="">
        <div className="flex items-center gap-1" onClick={onToggle}>
          {icon}
          <span>{title}</span>
        </div>
        {expanded && <div className="ml-4">{children}</div>}
      </div>
    </div>
  );
};

export default ExpandableSection;