import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Pro from "../assets/pro.png";
import { useGlobalContext } from "../context/HeaderContext";
import { useState } from "react";
import newRequest from "../helper/newRequest";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const N = styled.div`
  background-color: ${({ theme }) => theme.colors.hero};
  height: 4rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
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
const NavbarContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
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

const Logo = styled.div``;
const LogoText = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

// center
const Center = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const ListItems = styled.ul`
  display: flex;
  gap: 0.7rem;
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
const ListItem = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const LinkButton = styled.button`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 10rem;
  color: ${({ theme }) => theme.colors.white};
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

// right
const RightLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LinkT = styled.li`
  font-size: 1.3rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    font-size: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const JoinBtn = styled.button`
  color: white;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    padding: 0.3rem 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Profile = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  object-fit: cover;
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

// profile options
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* position: relative; */
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
const ProfileOptions = styled.div`
  position: absolute;
  right: 5px;
  top: 65px;
  padding: 1rem;
  background-color: white;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
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
const Options = styled.span`
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

const ToggleContainer = styled.div`
  color: white;
  background-color: #1dbf73;
  padding: 0.4rem 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid white;
  font-size: 1rem;
  cursor: pointer;
  display: none;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  const currentUser = {
    id: 1,
    userName: "Micah",
    isSeller: true,
  };

  // context
  const { dispatch } = useContext(AuthContext);

  // logout func
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("auth/logout/logoutUser");
      dispatch({ type: "LOGOUT" });
      toast.success("Logout success");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <N onMouseOver={handleSubmenu}>
      <NavbarContainer>
        <Logo>
          <Link to="/">
            <LogoText>Fiver-clone</LogoText>
          </Link>
        </Logo>
        <Center>
          <ListItems>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                category
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                explore
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                company
              </LinkButton>
            </ListItem>
          </ListItems>
        </Center>
        <RightLinks>
          {!currentUser.isSeller && <LinkT>Sell</LinkT>}
          {!currentUser && <JoinBtn>join</JoinBtn>}
          <ProfileContainer>
            <Profile src={Pro} onClick={() => setOpen(!open)} />
            {open && (
              <ProfileOptions>
                {currentUser.isSeller && (
                  <>
                    <Link to="/mygigs">
                      <Options>Gigs</Options>
                    </Link>
                    <Link to="/add">
                      <Options>Add New Gig</Options>
                    </Link>
                  </>
                )}
                <Link to="/orders">
                  <Options>Orders</Options>
                </Link>
                <Link to="/messages">
                  <Options>Messages</Options>
                </Link>
                <Link onClick={handleLogout}>
                  <Options>Logout</Options>
                </Link>
                <Link to="/forgotPassword">
                  <Options>Forgot Password</Options>s
                </Link>
              </ProfileOptions>
            )}
          </ProfileContainer>
          <ToggleContainer onClick={openSidebar}>
            <AiOutlineMenu />
          </ToggleContainer>
        </RightLinks>
      </NavbarContainer>
    </N>
  );
}

export default Navbar;
