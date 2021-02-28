import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>You Best</span> Version of
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Yourself.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          We create content to improbve your self development skills &
          Productivity. Subscibe to our YouTube channel and contact us for any
          inquiries.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="Brain Book Strength"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
