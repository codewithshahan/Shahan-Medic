import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do we believe in you that your content is authentic?">
          <div className="answer">
            <p>
              We use Reference in Description and Books Name along with author.
            </p>
            <p>
              Our content is base on research and famous author suggestions.
              Also we use online videos and websites to create our content more
              flexible.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do you make videos?">
          <div className="answer">
            <p>First of all, we research a topic in the books or online. </p>
            <p>
              then we summarize them and make our content in much attractive
              with animations.
            </p>
          </div>
        </Toggle>
        <Toggle title="Which Software do you use to make the videos?">
          <div className="answer">
            <p>Actually, we use VideoScribe wthiteboard animation Software. </p>
            <p>Sometimes, Movavi Video Editor Software.</p>
          </div>
        </Toggle>
        <Toggle title="What is your plan in the future?">
          <div className="answer">
            <p>
              We want to help people to live a more productive life and avoid
              social distructions to focus on what they want in life.
            </p>
            <p>
              Also, we porvide more content to live a healthy lifestyle like
              exercising and eat healthy foods.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
