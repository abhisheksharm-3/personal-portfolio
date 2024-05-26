// useStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  selectedView: [],
  expandFolder: true,
  selectedTab: "personal-info",
  selectedFolder: 2,
  viewFinderActive: true,
  code: summary.details,
  isOpen: false,

  // Methods to update state
  setSelectedView: (selectedView) => set({ selectedView }),
  toggleExpandFolder: () => set((state) => ({ expandFolder: !state.expandFolder })),
  setSelectedTab: (selectedTab) => set({ selectedTab }),
  setSelectedFolder: (selectedFolder) => set({ selectedFolder }),
  toggleViewFinderActive: () => set((state) => ({ viewFinderActive: !state.viewFinderActive })),
  setCode: (code) => set({ code }),
  setIsOpen: (isOpen) => set({ isOpen }),

  // Methods for PersonalInfo
  showBio: true,
  showSummary: true,
  showTechInterests: false,
  showInterests: false,
  showEducation: false,
  showHighSchool: false,
  showUniversity: false,

  toggleShowBio: () => set((state) => ({ showBio: !state.showBio, showSummary: false })),
  toggleShowEducation: () => set((state) => ({ showEducation: !state.showEducation, showHighSchool: false, showUniversity: false })),
  toggleShowInterests: () => set((state) => ({ showInterests: !state.showInterests, showTechInterests: false })),
  toggleShowSummary: () => set((state) => ({ showSummary: !state.showSummary, showHighSchool: false, showUniversity: false, showTechInterests: false })),
  toggleShowTechInterests: () => set((state) => ({ showTechInterests: !state.showTechInterests, showSummary: false, showHighSchool: false, showUniversity: false })),
  toggleShowHighSchool: () => set((state) => ({ showHighSchool: !state.showHighSchool, showUniversity: false, showSummary: false, showTechInterests: false })),
  toggleShowUniversity: () => set((state) => ({ showUniversity: !state.showUniversity, showHighSchool: false, showSummary: false, showTechInterests: false })),

  // Methods for ProfessionalInfo
  experience: false,
  showExperienceSummary: false,
  showTechStack: false,
  showTechStackDetails: false,
  showCertificates: false,
  selectedPdfUrl: "",

  toggleExperience: () => set((state) => ({ experience: !state.experience })),
  toggleShowExperienceSummary: () => set((state) => ({ showExperienceSummary: !state.showExperienceSummary, showTechStackDetails: false })),
  toggleShowTechStackDetails: () => set((state) => ({ showTechStackDetails: !state.showTechStackDetails, showExperienceSummary: false })),
  toggleCertificate: (pdfUrl) => set((state) => ({ selectedPdfUrl: pdfUrl })),
  toggleShowCertificates: () => set((state) => ({ showCertificates: !state.showCertificates })),
  toggleExpandFolderProfessional: () => set((state) => ({ showTechStack: !state.showTechStack, showTechStackDetails: false })),

  // Methods for Hobbies
  showNerdy: false,
  showNerdyDetails: false,
  showNonNerdy: false,
  showNonNerdyDetails: false,

  toggleShowNerdy: () => set((state) => ({ showNerdy: !state.showNerdy, showNerdyDetails: false })),
  toggleShowNerdyDetails: () => set((state) => ({ showNerdyDetails: !state.showNerdyDetails, showNonNerdyDetails: false })),
  toggleShowNonNerdy: () => set((state) => ({ showNonNerdy: !state.showNonNerdy, showNonNerdyDetails: false })),
  toggleshowNonNerdyDetails: () => set((state) => ({ showNonNerdyDetails: !state.showNonNerdyDetails, showNerdyDetails: false }))
}));

export default useStore;