import styled from "styled-components";
import GigCard from "./GigCard";
import { projects } from "../static/sli";

const G = styled.div`
  width: 100%;
  padding-top: 2rem;
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

const Text = styled.h2`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: bold;
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

const GContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    grid-template-columns: 1fr;
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function GigCards() {
  return (
    <G>
      <Text>Select and buy </Text>
      <GContainer>
        {projects && projects.map((g) => <GigCard key={g.id} g={g} />)}
      </GContainer>
    </G>
  );
}

export default GigCards;
