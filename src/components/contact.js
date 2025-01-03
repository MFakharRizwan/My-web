import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa"; // Importing the icons

const Contact = () => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      const inView = rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
      setIsInViewport(inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContactSection id="contact-section">
      <ContactWrapper isInViewport={isInViewport}>
        <AnimatedText isInViewport={isInViewport}>
          <span>I’m Available</span>
        </AnimatedText>
        <Heading isInViewport={isInViewport}>Let’s Connect</Heading>
        <Description isInViewport={isInViewport}>
          Feel free to contact me if you have any questions. I’m available for
          new projects or just for chatting.
        </Description>

        <DownloadButton isInViewport={isInViewport} href="/fakharResume.pdf" download>
          Download My Resume
        </DownloadButton>

       
        <SocialButtons>
          <SocialButton href="https://www.instagram.com/mfakharrizwan/" target="_blank">
            <FaInstagram size={28} />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/muhammad-fakhar-rizwan-65548b258/" target="_blank">
            <FaLinkedinIn size={28} />
          </SocialButton>
          <SocialButton href="mailto:mfakhar910@gmail.com">
            <FaEnvelope size={28} />
          </SocialButton>
          <SocialButton href="https://github.com/MFakharRizwan" target="_blank">
            <FaGithub size={28} />
          </SocialButton>
        </SocialButtons>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;


const fadeSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-image: linear-gradient(
    to right bottom,
    #19191e,
    #1a1a20,
    #1c1c21,
    #1d1d23,
    #1f1f25,
    #202026,
    #212126,
    #222227,
    #232326,
    #242326,
    #242425,
    #252525
  );
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ContactWrapper = styled.div`
  max-width: 600px;
  animation: ${(props) => (props.isInViewport ? fadeSlideDown : "none")} 0.8s ease-in-out;
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transform: ${(props) =>
    props.isInViewport ? "translateY(0)" : "translateY(50px)"};
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
`;

const AnimatedText = styled.h1`
  font-size: 2rem;
  color: #787272;
  font-family: "Georgia", serif;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #787272;
  margin-bottom: 1.5rem;
  font-family: "Georgia", serif;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #787272;
  font-family: "Arial", sans-serif;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

// New button for downloading resume
const DownloadButton = styled.a`
 // background: #333;
 background-image: linear-gradient(to right top, #1a1a1a, #181819, #161717, #141516, #121314, #141617, #15181b, #161a1e, #192226, #1b2a2e, #1e3234, #223a39);
  color: #787272;
  font-family: "Arial", sans-serif;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  margin-bottom: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;

  &:hover {
    background: #4a4a4a;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialButton = styled.a`
  
  color: #787272;
  font-family: "Arial", sans-serif;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  border-radius: 50px 50px;
  font-size: 1.8rem;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: #4a4a4a;
    color: white;
  }
`;

