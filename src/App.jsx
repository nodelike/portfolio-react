import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function App() {
  const media = [
    {
      logo: <FaLinkedin size={"1.5rem"} />,
      name: "LinkedIn",
      link: "",
    },
    {
      logo: <FaGithub size={"1.5rem"} />,
      name: "Github",
      link: "",
    },
    {
      logo: <FaTwitter size={"1.5rem"} />,
      name: "X/Twitter",
      link: "",
    },
    {
      logo: <CgMail size={"1.5rem"} />,
      name: "E-Mail",
      link: "",
    },
    {
      logo: <FaHackerrank size={"1.5rem"} />,
      name: "Hackerrank",
      link: "",
    },
  ];

  const programmingLanguages = [
    "Python",
    "C++",
    "JS/ReactJS",
    "Embedded C",
    "HTML/CSS",
  ];

  const CSSkills = {
    "Programming Languages": [
      "Python",
      "C++",
      "JS/ReactJS",
      "Embedded C",
      "HTML/CSS",
    ],
    "LLM & NLP": [
      "LLM Prompt Engineering",
      "LLM Retrieval Augmented Generation",
      "LangChain Tools",
      "LLM Fine-Tuning using QLoRA",
    ],
    "ML & Data Science Frameworks": [
      "PyTorch, TinyGrad & MLX",
      "Keras",
      "Scikit-learn",
      "Pandas",
    ],
    "Web/Software Development": ["Flask", "Electron Framework with JS"],
    "Dev tools and environments": [
      "Linux, Bash, Zsh, Vim",
      "Git tools, Github",
    ],
  };

  return (
    <div className="flex">
      <div className="w-[30%] border-black border-r-2 h-[100vh] bg-yellow-300 items-center flex flex-col p-3 justify-between">
        <div className="items-center flex flex-col w-full">
          <div className="rounded-[50%] bg-black h-[130px] w-[130px]"></div>
          <div className="flex flex-col w-[90%] pt-6 gap-3">
            <p className="font-bold text-2xl">Kishore Gunalan</p>
            <div className="flex gap-3">
              <p>05-01-2003 | 21 years old</p>
            </div>
            <p className="text-md">Building intelligent machines</p>
          </div>
        </div>

        <div className="flex flex-col w-[90%] pt-6  gap-4">
          {media.map((item) => (
            <div className="flex gap-3 items-center">
              {item.logo}
              <a href={item.link} className="text-[14px]">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="flex ml-10 pt-10 flex-col">
          <p className="text-[1.2rem]">CS Skills</p>

          {Object.keys(CSSkills).map((item) => (
            <div className="flex ml-10 pt-3 flex-col">
              <div className="flex flex-col">
                <p className="text-md font-bold">{item}</p>
                {CSSkills[item].map((subItem) => (
                  <p>{subItem}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
