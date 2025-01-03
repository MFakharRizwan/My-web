import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  const handleScroll = useCallback(() => {
    const sections = ["Home", "projects", "About", "experience", "contact-section"];
    let currentSection = "";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = sectionId;
        }
      }
    });

    if (currentSection !== active) {
      setActive(currentSection);
    }
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Nav>
      <Logo onClick={() => handleMenuClick("Home")}>
        Syed M Fakhar Rizwan
      </Logo>
      <MenuWrapper>
        {/* The normal menu for larger screens */}
        <Menu isMobileMenuOpen={isMobileMenuOpen}>
          <MenuItem onClick={() => handleMenuClick("Home")} isActive={active === "Home"}>
            Home
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("projects")} isActive={active === "projects"}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("About")} isActive={active === "About"}>
            About
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("experience")} isActive={active === "experience"}>
            Experience
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("contact-section")} isActive={active === "contact-section"}>
            Contact
          </MenuItem>
        </Menu>
        {/* Hamburger Icon for mobile screens */}
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "×" : "☰"} {/* Toggle between hamburger and close icon */}
        </MobileMenuButton>
      </MenuWrapper>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-family: "Georgia", serif;
  font-size: 2.0rem;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  width: 1500px;

  @media (max-width: 770px) {
    font-size: 1.5rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Make the wrapper take full width to align mobile button to the right */

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-end; /* Align hamburger icon to the right */
  }
`;

const Menu = styled.div`
font-family: "Arial", sans-serif;
font-size: 1rem;
color: #777;
  display: flex;
  gap: 2rem;
  flex-grow: 1; /* Ensure the menu stretches on large screens and keeps the hamburger button pushed to the right */

  @media (max-width: 770px) {
    display: ${(props) => (props.isMobileMenuOpen ? "block" : "none")};
    position: absolute;
    top: 4rem;
    right: 1rem;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 8px;
    width: 200px; /* Adjust width as needed */
  }
`;

const MenuItem = styled.div`
  font-size: 1rem;
  font-family: "Georgia", serif;
  color: ${(props) => (props.isActive ? "#007BFF" : "#333")};
  cursor: pointer;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 770px) {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  font-family: "Georgia", serif;
  color: #333; /* Dark color for the hamburger icon */

  @media (max-width: 770px) {
    display: block;
  }

  &:hover {
    color: #007bff; /* Optional: Add a hover effect */
  }
`;





