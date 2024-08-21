import { useAboutMeStore } from './useAboutMeStore';

export const useExpandableSection = (sectionPrefix: string) => {
  const { expandedSections, actions } = useAboutMeStore();

  const toggleExpandedSection = (sectionId: string) => {
    actions.toggleExpandedSection(`${sectionPrefix}-${sectionId}`);
  };

  return { toggleExpandedSection, expandedSections };
};