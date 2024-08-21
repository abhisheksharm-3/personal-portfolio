import { create } from 'zustand';

interface AboutMeState {
  selectedTab: 'personal-info' | 'professional-info' | 'hobbies';
  selectedFolder: number;
  expandedSections: { [key: string]: boolean };
  code: string;
  selectedPdfUrl: string;
  viewFinderActive: boolean;
  currentViewFinder: boolean;
  actions: {
    setSelectedTab: (tab: AboutMeState['selectedTab']) => void;
    setSelectedFolder: (folder: AboutMeState['selectedFolder']) => void;
    toggleExpandedSection: (sectionId: string) => void;
    setCode: (code: string) => void;
    setSelectedPdfUrl: (url: string) => void;
    updateViewfinderStatus: (active: boolean) => void;
    setCurrentViewFinder: (active: boolean) => void;
  };
}

const useAboutMeStore = create<AboutMeState>((set) => ({
  selectedTab: 'personal-info',
  selectedFolder: 1,
  expandedSections: {},
  code: '',
  selectedPdfUrl: '',
  viewFinderActive: true,
  currentViewFinder: true,
  actions: {
    setSelectedTab: (tab) => set({ selectedTab: tab }),
    setSelectedFolder: (folder) => set({ selectedFolder: folder }),
    toggleExpandedSection: (sectionId) =>
      set((state) => ({
        expandedSections: {
          ...state.expandedSections,
          [sectionId]: !state.expandedSections[sectionId],
        },
      })),
    setCode: (code) => set({ code }),
    setSelectedPdfUrl: (url) => set({ selectedPdfUrl: url }),
    updateViewfinderStatus: (active) => set({ viewFinderActive: active }),
    setCurrentViewFinder: (active) => set({ currentViewFinder: active }),
  },
}));

export { useAboutMeStore };