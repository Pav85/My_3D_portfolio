import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects..</h2>
    </motion.div>
    
    <div className="w-full flex">
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Welcome to my projects section! Here, you can explore some of the web development projects I've worked on. 
      I'm passionate about creating user-friendly and visually appealing websites 
      and web applications using various technologies such as HTML, CSS, JavaScript, React, Node.js, and more.
      Each project showcases my skills in designing intuitive UI/UX, implementing responsive layouts, 
      and incorporating interactive features.
      </motion.p>
    </div>

    <div>

    </div>
    </>
  )
}

export default SectionWrapper(Works, "");