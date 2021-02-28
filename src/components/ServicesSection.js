import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import m from "../img/m.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Our <span>Content</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Productivity</h3>
            </div>
            <p>Our content will help you to become more Productive</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Big Ideas</h3>
            </div>
            <p>It will make your life more creative and meaningful</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Book Summaries</h3>
            </div>
            <p>Great author's suggesions will make your life easy</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Non Profit</h3>
            </div>
            <p>Our content is totally free</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="camera" src={m} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 2px;
    }
  }
`;

export default ServicesSection;
