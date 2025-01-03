import React from "react";
import styled from "styled-components";

// Experience data
const experiences = [
  { title: "Frontend Developer", company: "RainyDayLab Technologies.", duration: "Aug 2023 - Mar 2024" },
  { title: "Cloud Engineer", company: "PTCL/Ufone", duration: "June 2023 - July 2023" },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} className={index % 2 === 0 ? "left" : "right"}>
            <Content>
              <Year>{exp.duration}</Year>
              <Role>{exp.title}</Role>
              <Company>{exp.company}</Company>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;

// Styled components
const ExperienceSection = styled.section`
  background-image: linear-gradient(
    to right top,
    #ffffff,
    #fdfdfe,
    #fbfafc,
    #f8f8fb,
    #f6f6fa
  );
  color: #252222;
  padding: 60px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
  color: #292626;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: #444;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
  width: 100%;

  &.right {
    flex-direction: row-reverse; /* Position content to the right */
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    background-color: #735247;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(33, 27, 27);
  text-align: center;
  min-width: 100px;
  margin-right: 20px;
  font-family: "Georgia", serif;
`;

const Content = styled.div`
  background: linear-gradient(135deg, #e0e0e0, #f7f7f7);
  padding: 20px;
  border-radius: 8px;
  width: 45%;
  color: #000000;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Role = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 5px 0;
  color: #1b1919;
  font-family: "Arial", sans-serif;
`;

const Company = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
  font-family: "Arial", sans-serif;
`;

// Responsive Design
const TimelineItemResponsive = styled.div`
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;

    ${Content} {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    ${TimelineItem} {
      flex-direction: column;
      align-items: center;
    }

    ${Content} {
      width: 90%;
      margin: 20px 0;
    }

    ${Year} {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    ${Role} {
      font-size: 1.1rem;
    }

    ${Company} {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    ${SectionTitle} {
      font-size: 2rem;
    }

    ${TimelineItem} {
      margin: 20px 0;
    }

    ${Content} {
      width: 105%;
    }
  }
`;

