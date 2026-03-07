import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const tagStyles = {
  "blue-text-gradient": "bg-sky-500/15 text-sky-200 border-sky-400/30",
  "green-text-gradient":
    "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  "pink-text-gradient":
    "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30",
  "orange-text-gradient": "bg-amber-500/15 text-amber-200 border-amber-400/30",
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const shortDescription =
    description.length > 190 ? `${description.slice(0, 187)}...` : description;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.75)}
      className="w-full"
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.02}
        transitionSpeed={450}
        glareEnable={false}
        className="w-full h-full"
      >
        <div className="bg-tertiary/90 border border-white/10 rounded-3xl p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] h-full">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden">
            {image ? (
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1d1836] to-[#0b0f1f] flex items-center justify-center px-6">
                <p className="text-white/80 text-center text-lg font-semibold">
                  {name}
                </p>
              </div>
            )}

            {source_code_link && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <button
                  type="button"
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white/20"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </button>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-white font-bold text-[26px] leading-tight">
              {name}
            </h3>
            <p className="mt-3 text-secondary text-[15px] leading-7">
              {shortDescription}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium tracking-[0.02em] ${tagStyles[tag.color] || "bg-white/10 text-white/80 border-white/20"}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {live_link && (
            <div className="mt-6">
              <button
                type="button"
                onClick={() => window.open(live_link, "_blank")}
                className="inline-flex items-center rounded-xl bg-[#915eff] hover:bg-[#7c4de6] transition-colors duration-200 px-4 py-2 text-sm font-semibold text-white"
              >
                Live Demo
              </button>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
