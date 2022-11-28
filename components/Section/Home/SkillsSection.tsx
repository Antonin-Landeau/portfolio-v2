import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Skills } from "../../../types/types";
import Title from "../../Library/Title";
import SectionFooter from "./SectionFooter";
import SkillCard from "../../Library/Cards/SkillCard";
import Download from "../../Icons/Download";

interface Props {
  skills: Skills[];
}

const SkillsSection: FunctionComponent<Props> = ({ skills }) => {
  return (
    <section className="p-5 bg-default-white">
      <Title title="Compétences" variant="black" small />
      <div className="py-5 mx-auto w-fit">
        <div className="md:grid grid-cols-2">
          {skills &&
            skills.map((skill, index) => (
              <SkillCard
                key={index}
                skills={skill.skills}
                technologies={skill.technologies}
              />
            ))}
        </div>
        <SectionFooter variant="">
          <div className="py-7 text-primary-orange">
            <Link href="CV.pdf" download={true} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Download className="h-6 m-3"/>
                  <span>Télécharger mon CV</span>
                </div>
                
              </a>
            </Link>
          </div>
        </SectionFooter>
      </div>
    </section>
  );
};

export default SkillsSection;
