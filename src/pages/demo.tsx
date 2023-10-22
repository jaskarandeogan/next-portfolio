import CircularProgressBar from "@/components/CircularProgressBar";
import { CircularProgressBarProps } from "@/types/components";
import React from "react";
import LinkButton from "@/components/shared/LinkButton";
import { MdArrowOutward } from "react-icons/md";
import ExperienceCard from "@/components/shared/ExperienceCard";
import classNames from "classnames";
import ProjectCard from "@/components/shared/ProjectCard";

const Demo = () => {

  const company = {
    name: "Payfelix",
    website: "https://www.payfelix.com"
  }
  return (
    <div>
      <CircularProgressBar>
        <div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-slate-400 h-20 w-20">
          75%
        </div>
      </CircularProgressBar>

      <div>
        <LinkButton
          leftIcon={<MdArrowOutward />}
          rightIcon={<MdArrowOutward />}
        >
          Hello
        </LinkButton>
      </div>
      <div>
        <ExperienceCard
          title="Software Engineer"
          company={company}
          startDate="Jan 2021"
          endDate="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          technologies={["React", "TypeScript", "TailwindCSS"]}
        />
      </div>
      <div>
        <ProjectCard
          title="Project Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione."
          technologies={["React", "TypeScript", "TailwindCSS"]}
          githubLink="https://github.com"
          liveLink="https://github.com"
          image="/"
          projectBlogLink="https://github.com"
        />
      </div>
    </div>
  );
};

export default Demo;
