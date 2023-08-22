import styled from "styled-components";
import { useGlobalContext } from "../context/HeaderContext";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../static/data";
import { Link } from "react-router-dom";
// import Cover from "../../assets/cover.jpg";

const S = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  visibility: ${({ isOpen }) => (isOpen === true ? "visible" : "hidden")};
  z-index: ${({ isOpen }) => (isOpen === true ? 999 : -1)};
  transition: ${({ theme }) => theme.trans};
  transform: ${({ isOpen }) => (isOpen === true ? "scale(1)" : "scale(0)")};
  background: rgba(0, 0, 0, 0.5);
  overflow: scroll;
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

const SidebarContainer = styled.div`
  width: 90vw;
  /* height: 95vh; */
  height: 100%;
  max-width: 620px;
  background: ${({ theme }) => theme.colors.whitesmoke};
  border-radius: 0.25rem;
  position: relative;
  padding: 4rem 2rem;
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

const ToggleContainerBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.orange};
  position: absolute;
  top: 1rem;
  right: 1rem;
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

const CloseToggleBtn = styled(FaTimes)`
  font-size: 2rem;
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

const SubLinks = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.25rem;
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

const SubKey = styled.div`
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
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.orange};

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

const SubLinkContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
const SubLink = styled.h6`
  text-transform: capitalize;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ListContainer = styled.div`
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 2.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.black};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
const ListItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ListItem = styled.li`
  font-weight: 400;
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.black};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

// deal with later
const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.whitesmoke};
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
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

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <S isOpen={isSidebarOpen}>
      <SidebarContainer>
        <ToggleContainerBtn onClick={closeSidebar}>
          <CloseToggleBtn />
        </ToggleContainerBtn>
        <SubLinks>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <SubKey key={index}>
                <SubTitle>{page}</SubTitle>
                <SubLinkContainer>
                  {links.map((link, index) => {
                    const { url, label } = link;
                    return (
                      <Link to={url} key={index}>
                        <SubLink>{label}</SubLink>
                      </Link>
                    );
                  })}
                </SubLinkContainer>
              </SubKey>
            );
          })}
        </SubLinks>
      </SidebarContainer>
    </S>
  );
};

export default Sidebar;
