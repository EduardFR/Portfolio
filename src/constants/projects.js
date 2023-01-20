import ProjectScrin from "../assets/ProjectScrin.jpeg";
import ProjectMultiStepForm from "../assets/ProjectMultiStepForm.png";

export const projects = [
  {
    ID: "1",
    url: `${ProjectScrin}`,
    name: "KODE treinee test",
    linkToCode: "https://github.com/EduardFR/appKode.git",
    linkToProject: "https://app-kode.vercel.app",
    skills: [
      {
        id: "1",
        skill: "HTML",
      },
      {
        id: "2",
        skill: "Styled-Components",
      },
      {
        id: "3",
        skill: "React",
      },
      {
        id: "4",
        skill: "Redux",
      },
    ],
  },
  {
    ID: "2",
    url: `${ProjectMultiStepForm}`,
    name: "Multi step form",
    linkToCode: "https://github.com/EduardFR/multi-step-form.git",
    linkToProject: "https://multi-step-form-brown-tau.vercel.app",
    skills: [
      {
        id: "1",
        skill: "HTML",
      },
      {
        id: "2",
        skill: "Styled-Components",
      },
      {
        id: "3",
        skill: "React",
      },
      {
        id: "4",
        skill: "Redux",
      },
    ],
  },
];
