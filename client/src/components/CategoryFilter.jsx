import styled from "styled-components";
import { categoryForFilter } from "../static/categoryD";
import { Link } from "react-router-dom";

const C = styled.div`
  width: 100%;
  padding: 0.8rem 0.2rem;
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
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  /* display: flex;
  flex-direction: column;
  gap: 0.5rem; */
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Text = styled.h3`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function CategoryFilter() {
  return (
    <C>
      <Container>
        <Title>Category</Title>
        <TextContainer>
          {categoryForFilter &&
            categoryForFilter.map((c) => {
              return (
                <Link to={`/gigs?cat=${c.cat}`} key={c.id}>
                  <Text key={c.id}>{c.cat}</Text>
                </Link>
              );
            })}
        </TextContainer>
      </Container>
    </C>
  );
}

export default CategoryFilter;
