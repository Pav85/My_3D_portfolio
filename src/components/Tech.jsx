import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={zoomIn()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Technologies. </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8 pt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
