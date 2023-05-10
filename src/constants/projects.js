import ProjectScrin from "../assets/ProjectScrin.jpeg";
import ProjectMultiStepForm from "../assets/ProjectMultiStepForm.png";
import GeneratePassword from "../assets/GeneratePassword.png";
import MyIncome from "../assets/MyIncome.jpeg";

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
  {
    ID: "3",
    url: `${GeneratePassword}`,
    name: "Password Generator",
    linkToCode: "https://github.com/EduardFR/password-generator-app.git",
    linkToProject: "https://password-generator-app-ten.vercel.app",
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
        skill: "TypeScript",
      },
    ],
  },
  {
    ID: "4",
    url: `${MyIncome}`,
    name: "My Income",
    linkToProject: "https://my-income.ge",
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
        skill: "TypeScript",
      },
    ],
  },
];
