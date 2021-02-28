import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  const contact = "https://withshahan.github.io/Contact-Form-HTML/";
  return (
    <React.Fragment>
      <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      ></ContactStyle>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          marginTop: 100,
        }}
      >
        <a class="btn" href="mailto:shahanmedic@gmail.com">
          CONTACT US
        </a>
      </div>
    </React.Fragment>
  );
};

const ContactStyle = styled(motion.div)``;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
