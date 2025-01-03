import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer id="About">
      {/* Left Floating Buttons */}
      <AboutTag style={{ top: "30%", left: "5%" }}>React JS</AboutTag>
      <AboutTag style={{ top: "42%", left: "3%" }}>Node JS</AboutTag>
      <AboutTag style={{ top: "55%", left: "4%" }}>MongoDB</AboutTag>

      {/* Center Content */}
      <AboutContent>
        <HelloText>
          <em>Hello!</em>
        </HelloText>
        <Heading>
        I assist startups and enterprises in creating seamless interfaces that foster emotional connections between their products and engaged customers.
        </Heading>
      </AboutContent>

      {/* Right Floating Buttons */}
      <AboutTag style={{ top: "30%", right: "5%" }}>Express JS</AboutTag>
      <AboutTag style={{ top: "45%", right: "3%" }}>React Native</AboutTag>
      <AboutTag style={{ top: "60%", right: "4%" }}>Strategy</AboutTag>
    </AboutContainer>
  );
};

export default About;

// Styled-components
const AboutContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0e0e0, #f7f7f7);
  overflow: hidden;
  padding: 20px; /* Added padding for small screens */

  /* Responsive Design */
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const AboutTag = styled.div`
  position: absolute;
  font-family: "Arial", sans-serif;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 18px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 14px;
    position: relative; /* Removed absolute positioning */
    margin: 10px; /* Added margin to prevent overlap */
  }
`;

const AboutContent = styled.div`
  max-width: 700px;
  text-align: center;
  padding: 0 20px;
  z-index: 10; /* Ensure content is above floating tags */

  /* Responsive Design */
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const HelloText = styled.p`
  font-family: "Georgia", serif;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  line-height: 1.4;
  color: #111;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;





