import React from "react";
import styled from "styled-components";

const Hero = () => (
  <HeroSection id="Home">
    <h1>
      I'm &nbsp; <i>Fakhar &nbsp;</i>
      <StyledImage src="/fakhar.jpeg" alt="Fakhar" />
    </h1>
    <h1>
      a MERN &nbsp;
      <StyledImage src="/project.png" alt="Product Work" />
      <i>&nbsp; Developer</i>
    </h1>
    <h1>
      based in Pakistan &nbsp;
      <StyledImage src="/islamabad.png" alt="Islamabad" />
    </h1>
    <p>
      My work emphasizes delivering high-quality, scalable solutions while staying up to date with modern web technologies and best practices.
    </p>
  </HeroSection>
);

export default Hero;

// Styled-components
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem;
  background-color: #d9d9d9;
  color: #333;

  h1 {
    font-family: "Georgia", serif;
    font-size: 3.5rem;
    font-weight: normal;
    line-height: 1.3;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    i {
      font-style: italic;
      color: #666;
    }
  }

  p {
    font-family: "Arial", sans-serif;
    font-size: 1rem;
    color: #777;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  @media (max-width: 1200px) {
    padding: 4rem 1.5rem;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 900px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 0.9rem;
      max-width: 90%;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const StyledImage = styled.img`
  width: 95px;
  height: 85px;
  border-radius: 50% / 30%;
  box-shadow: 0px 2px 4px rgba(42, 41, 41, 0.2);
  object-fit: cover;
  border: 3px solid #000;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @media (max-width: 1200px) {
    width: 80px;
    height: 70px;
  }

  @media (max-width: 900px) {
    width: 70px;
    height: 60px;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 50px;
  }

  @media (max-width: 400px) {
    width: 50px;
    height: 45px;
  }
`;


