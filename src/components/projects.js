import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import images
import ordermunchImage from "../images/OrderMunch.png";
import smartImage from "../images/SmartQuery1.png";

// Define the projects array with route paths
const projects = [
  {
    name: "OrderMunch",
    category: "Frontend Website",
    image: ordermunchImage,
    website: "https://mfakharrizwan.github.io/OrderMunch/", // Add live website link
  },
  {
    name: "SmartQuery",
    category: "MERN Website",
    image: smartImage,
    website: "https://github.com/username/project-two", // Add live website link
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route); // Navigate to the corresponding route
  };

  return (
    <Section id="projects">
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleCardClick(project.route)}
          />
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;

// ProjectCard component
const ProjectCard = ({ project, onClick }) => {
  return (
    <ProjectCardContainer onClick={onClick}>
      <CardImageWrapper>
        <CardImage src={project.image} alt={project.name} />
      </CardImageWrapper>
      <CardContent>
        <ProjectName>{project.name}</ProjectName>
        <CategoryTag>{project.category}</CategoryTag>
        <ButtonContainer>
          <a href={`https://github.com/MFakharRizwan?tab=repositories${project.name}`} target="_blank" rel="noopener noreferrer">
            <Button>GitHub Repo</Button>
          </a>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <Button>Live Website</Button>
          </a>
        </ButtonContainer>
      </CardContent>
    </ProjectCardContainer>
  );
};

// Styled-components for styling
const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #d9d9d9;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCardContainer = styled.div`
  background-color: #FFFAE9;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);
    background-color: #FFFAE9;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid #333;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  text-align: left;
  margin-top: 1rem;
`;

const ProjectName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: "Georgia", serif;
  color: rgb(12, 12, 12);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const CategoryTag = styled.p`
  font-size: 1rem;
  color: #358d8d;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  background: radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(7, 7, 7, 1) 50%, rgba(170, 66, 170, 1) 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
  }
`;
