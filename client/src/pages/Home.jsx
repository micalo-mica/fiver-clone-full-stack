import styled from "styled-components";
import Hero from "../components/Hero";

import Slide from "../components/Slide";
import GigCards from "../components/GigCards";
import CategoryFilter from "../components/CategoryFilter";

const H = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Home() {
  return (
    <H>
      <Hero />
      <CategoryFilter />
      <Slide />
      <GigCards />
    </H>
  );
}

export default Home;
