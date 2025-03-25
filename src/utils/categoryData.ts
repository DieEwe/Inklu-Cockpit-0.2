import { translations } from "./mockData";

export const getCategoryData = (language: string) => {
  const t = translations[language];
  
  return [
    { id: "communication", name: t.communication, color: "#7C444F" }, // Wine
    { id: "process", name: t.process, color: "#9F5255" }, // Rose
    { id: "strategy", name: t.strategy, color: "#E16A54" }, // Coral
    { id: "leadership", name: t.leadership, color: "#F39E60" }, // Peach
    { id: "accessibility", name: t.accessibility, color: "#F2AE66" }, // Sand
  ];
};