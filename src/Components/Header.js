import { useEffect, useState } from "react";
import styled from "styled-components";
import symbol from "Images/symbol.png";

const Container = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1em;
  z-index: 10;
  ${(props) => {
    return props.isScroll
      ? `backdrop-filter: blur(10px); background-color: rgba(236, 240, 241, 0.5);`
      : "none;";
  }};
  transition: backdrop-filter 0.5s ease, background-color 0.5s ease;
`;

const Symbol = styled.div`
  background-image: url(${symbol});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin-right: 2em;
  cursor: pointer;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
`;

const Item = styled.li`
  font-size: 1.2em;
  :not(:last-child) {
    margin-right: 1em;
  }
  padding: 1.5em 0.5em;
  text-shadow: 0.1em 0.1em 0.2em #ffffff;
  cursor: pointer;
`;

const Header = () => {
  // Header background style
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () =>
    window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header click event
  const scrollTo = (sectionName) => {
    if (typeof sectionName !== "string") return;
    return () => {
      const section = document.getElementById(sectionName);
      section.scrollIntoView({ behavior: "smooth" });
    };
  };

  return (
    <Container isScroll={isScroll}>
      <Symbol onClick={scrollTo("#")} />
      <List>
        <Item onClick={scrollTo("profile")}>PROFILE</Item>
        <Item onClick={scrollTo("projects")}>PROJECTS</Item>
        <Item onClick={scrollTo("contact")}>CONTACT</Item>
      </List>
    </Container>
  );
};

export default Header;
