import styled from "styled-components";
import { projects } from "../static/sli";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import UseableSlid from "../components/UseableSlid";
import Pro from "../assets/pro.png";
import newRequest from "../helper/newRequest";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";

const G = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 3rem;
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
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    flex-direction: column;
    gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// left
const Left = styled.div`
  flex: 2;
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
    flex: 0;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const StarIcon = styled(AiFillStar)`
  font-size: 14px;
  font-weight: bold;
  color: #ffc108;
`;
const LikeIcon = styled(AiOutlineLike)``;
const DisLikeIcon = styled(AiOutlineDislike)``;

// user
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
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

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  color: orange;
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

const UserName = styled.h4``;
const UserStarNumb = styled.span``;

// slider
const SliderContainers = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const SliderContainer = styled.div`
  height: 29rem;
  width: 29rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    height: 20rem;
    width: 20rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
const GigTi = styled.h2`
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
const Disc = styled.p`
  font-weight: 300;
  line-height: 25px;
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

// Seller
const Seller = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const SellerTitle = styled.h2`
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
const SellerUser = styled.div`
  display: flex;
  align-items: center;
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
const SellerImg = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: contain;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
// =======
const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
const SellerName = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const SellerStar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const SellerBtn = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// box
const SellerBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const BoxItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const BoxItemSpan = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const BoxPText = styled.p`
  border-top: 0.2px solid lightgray;
  padding-top: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// right
const Right = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: max-content;
  max-height: 500px;
  position: sticky;
  top: 130px;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    flex: 0;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceSmallText = styled.span`
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceBigText = styled.p`
  /* font-size: 1rem; */
  font-weight: 300;
  color: gray;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceDownSpan = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const PriceDownBtn = styled.button`
  background-color: #1dbf73;
  padding: 10px;
  color: white;
  font-weight: 500;
  border: none;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Gig() {
  // i receive the id
  const { id } = useParams();

  /**
   * the code below will fetch the a single gig
   *  from the server then you can map over it
   */
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  // to check and make sure the user user id is available
  const userId = data?.userId;

  /**
   * the code below will get the seller from the server
   */
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <G>
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <Container>
          <Left>
            {/* user */}
            <UserContainer>
              <UserImg src={Pro} />
              <UserName>Micah</UserName>
              {/* 
            the code below will calculate the star and star number
            */}
              {!isNaN(data.totalStars / data.starNumber) && (
                <StarContainer>
                  {Array(Math.round(data.totalStars / data.starNumber))
                    .fill()
                    .map((item, i) => (
                      <StarIcon key={i} />
                    ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </StarContainer>
              )}
              {/* ===================================== */}
            </UserContainer>
            {/* slider */}
            <SliderContainers>
              <UseableSlid slidesToShow="1" arrowsScroll="1">
                {data.images.map((img) => (
                  <SliderContainer key={img}>
                    <Image key={img} src={img} alt="" />
                  </SliderContainer>
                ))}
              </UseableSlid>
            </SliderContainers>
            {/* disc */}
            <GigTi>About This Gig</GigTi>
            <Disc>{data.desc}</Disc>
            {/* seller */}
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <Seller>
                <SellerTitle>About Seller</SellerTitle>
                <SellerUser>
                  <SellerImg src={dataUser.img || Pro} />
                  <SellerInfo>
                    <SellerName>Micah</SellerName>
                    <SellerStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </SellerStar>
                    <SellerBtn>Cantact Me</SellerBtn>
                  </SellerInfo>
                </SellerUser>
                {/* Box */}
                <SellerBox>
                  <BoxItems>
                    {/* singleBox */}
                    <BoxItem>
                      <BoxItemSpan>From</BoxItemSpan>
                      <BoxItemSpan>Nigeria</BoxItemSpan>
                    </BoxItem>
                    {/* singleBox */}
                    <BoxItem>
                      <BoxItemSpan>From</BoxItemSpan>
                      <BoxItemSpan>Nigeria</BoxItemSpan>
                    </BoxItem>
                    {/* singleBox */}
                    <BoxItem>
                      <BoxItemSpan>From</BoxItemSpan>
                      <BoxItemSpan>Nigeria</BoxItemSpan>
                    </BoxItem>
                    {/* singleBox */}
                    <BoxItem>
                      <BoxItemSpan>From</BoxItemSpan>
                      <BoxItemSpan>Nigeria</BoxItemSpan>
                    </BoxItem>
                  </BoxItems>
                  <BoxPText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae nobis cumque quaerat tenetur perferendis, totam
                    id! Nulla repudiandae fugit sed.
                  </BoxPText>
                </SellerBox>
              </Seller>
            )}
            {/* the code below is when gig id is passed */}
            <Reviews gigId={id} />
          </Left>
          <Right>
            <PriceContainer>
              <PriceSmallText>I agree to pay</PriceSmallText>
              <Price>566660</Price>
            </PriceContainer>
            <PriceBigText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            </PriceBigText>
            <PriceDown>
              <PriceDownSpan>4 days delivery</PriceDownSpan>
              <PriceDownSpan>3 rating</PriceDownSpan>
            </PriceDown>
            {/* 
          /**
           * the id is from server if the server is on
           */}
            <Link to={`/pay/${id}`}>
              <PriceDownBtn>Continue</PriceDownBtn>
            </Link>
          </Right>
        </Container>
      )}
    </G>
  );
}

export default Gig;
