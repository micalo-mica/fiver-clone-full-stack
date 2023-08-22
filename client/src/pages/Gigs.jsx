import styled from "styled-components";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { projects } from "../static/sli";
import GigCard from "../components/GigCard";
import { useRef } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import newRequest from "../helper/newRequest";

const G = styled.div`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
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
const CategoryText = styled.p`
  font-size: 1rem;
  font-weight: 400;
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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const FilterIcon = styled(BsFilterLeft)`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;
const DownIcon = styled(AiOutlineDown)`
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #555;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Input = styled.input`
  padding: 0.3rem;
  border: 1px solid lightgrey;
  border-radius: 0.3rem;
  outline: none;
  &::placeholder {
    color: #999;
  }
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
const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: #1dbf73;
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 0.3rem;
  cursor: pointer;
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

// right
const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const SortBy = styled.span`
  color: #555;
  font-weight: 300;
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
const SortType = styled.span`
  font-weight: 500;
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
const DropDown = styled.div`
  padding: 1rem;
  background-color: white;
  border: 0.5px solid lightgrey;
  border-radius: 0.3rem;
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #555;
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
const SpanSort = styled.span`
  cursor: pointer;
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

// cards
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  console.log(search);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <G>
      <Container>
        <CategoryTitle>Dis</CategoryTitle>
        <CategoryText>Fiver Graphics & Design </CategoryText>
        {/* filter */}
        <FilterContainer>
          <Left>
            <FilterIcon />
            <Input type="text" placeholder="min" ref={minRef} />
            <Input type="text" placeholder="max" ref={maxRef} />
            <Button type="submit" onClick={apply}>
              apply
            </Button>
          </Left>
          <Right>
            <SortBy>Sort By</SortBy>
            <SortType>{sort === "sales" ? "Best Selling" : "Newest"}</SortType>
            <DownIcon onClick={() => setOpen(!open)} />
            {open && (
              <DropDown>
                {sort === "sales" ? (
                  <SpanSort onClick={() => reSort("createdAt")}>
                    Newest
                  </SpanSort>
                ) : (
                  <SpanSort onClick={() => reSort("sales")}>
                    Best Selling
                  </SpanSort>
                )}
              </DropDown>
            )}
          </Right>
        </FilterContainer>
        <Cards>
          {/* 
          the code below will be receive as item in the GigCard component
           */}
          {/* {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)} */}
          {projects && projects.map((g) => <GigCard key={g.id} g={g} />)}
        </Cards>
      </Container>
    </G>
  );
}

export default Gigs;
