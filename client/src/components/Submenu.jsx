import styled from "styled-components";
import { useGlobalContext } from "../context/HeaderContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const S = styled.div`
  border-radius: 0.4rem;
  /* position: absolute; */
  position: fixed;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  /* this is the code that control the display of submenu */
  display: ${({ sid }) => (sid === true ? "block" : "none")};
  padding: 2rem;
  transition: ${({ theme }) => theme.trans};
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
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
const SubTitle = styled.h4`
  /* background-color: ${({ theme }) => theme.colors.whitesmoke}; */
  margin-bottom: 1.5rem;
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
const SubMenuCenter = styled.div`
  display: grid;
  grid-template-columns: ${({ col }) =>
    col === "col2"
      ? "repeat(2, 1fr)"
      : col === "col3"
      ? "repeat(3, 1fr)"
      : " repeat(4, 1fr)"};
  /* the code above and below works */
  /* ${({ col }) =>
    (col === "col2" && `grid-template-columns:repeat(2, 1fr)`) ||
    (col === "col3" && `grid-template-columns:repeat(3, 1fr)`) ||
    (col === "col4" && `grid-template-columns:repeat(4, 1fr)`)}; */
  gap: 0.25rem 2rem;
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
const LinKsContainer = styled.div`
  width: 8rem;
  display: block;
  color: ${({ theme }) => theme.colors.black};
  /* color: #222; */
  text-transform: capitalize;
  display: flex;
  align-items: center;
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

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col2");
  console.log(columns);
  useEffect(() => {
    setColumns("col2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(page);
    if (links.length === 3) {
      setColumns("col3");
    }
    if (links.length > 3) {
      setColumns("col4");
    }
  }, [page, location, links]);

  return (
    <S sid={isSubmenuOpen} ref={container}>
      <SubTitle>{page}</SubTitle>
      <SubMenuCenter col={columns}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <Link key={index} to={url}>
              <LinKsContainer>
                {icon}
                {label}
              </LinKsContainer>
            </Link>
          );
        })}
      </SubMenuCenter>
    </S>
  );
};

export default Submenu;
