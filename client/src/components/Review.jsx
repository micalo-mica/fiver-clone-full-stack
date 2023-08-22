import { AiFillStar, AiOutlineLike } from "react-icons/ai";
import styled from "styled-components";
import Pro from "../assets/pro.png";

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
// Review user
const ReviewsUser = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const ReviewImg = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const ReviewName = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const ReviewCountry = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const StarNumb = styled.span`
  margin-left: 0.2rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// review
const ReviewMessage = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
// helpful
const Helpful = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const HelpfulText = styled.h4`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const HelpfulIconContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const HelpfulTextSmall = styled.span`
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Hr = styled.hr`
  height: 0;
  border: 0.5px solid lightgray;
  margin-bottom: 20px;
`;

const StarIcon = styled(AiFillStar)`
  font-size: 14px;
  font-weight: bold;
  color: #ffc108;
`;
const LikeIcon = styled(AiOutlineLike)``;
// const DisLikeIcon = styled(AiOutlineDislike)``;

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

function Review({ review }) {
  // const { isLoading, error, data } = useQuery(
  //     {
  //       queryKey: [review.userId],
  //       queryFn: () =>
  //         newRequest.get(`/users/${review.userId}`).then((res) => {
  //           return res.data;
  //         }),
  //     },
  //   );

  return (
    <ReviewsContainer>
      {/* Review user */}
      <ReviewsUser>
        <ReviewImg src={Pro} />
        <ReviewInfo>
          <ReviewName>Micah</ReviewName>
          <ReviewCountry>Nigeria</ReviewCountry>
        </ReviewInfo>
      </ReviewsUser>
      {/* star */}
      {/* 
            the code below will calculate the star and star number
            */}
      {/* {!isNaN(data.totalStars / data.starNumber) && (
              <StarContainer>
                {Array(Math.round(data.totalStars / data.starNumber))
                  .fill()
                  .map((item, i) => (
                    <StarIcon key={i} />
                  ))}
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
              </StarContainer>
            )} */}
      <StarContainer>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarNumb>5</StarNumb>
      </StarContainer>
      {/* review message */}
      <ReviewMessage>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis illo
        molestiae quas minima ipsa atque doloribus debitis?
      </ReviewMessage>
      {/* helpful */}
      <Helpful>
        <HelpfulText>is this helpful?</HelpfulText>
        {/* icons */}
        <HelpfulIconContainer>
          {/* 1 */}
          <HelpfulTextSmall>Yes</HelpfulTextSmall>
          <LikeIcon />
        </HelpfulIconContainer>
        {/* 2 */}
        <HelpfulIconContainer>
          <HelpfulTextSmall>Yes</HelpfulTextSmall>
          <LikeIcon />
        </HelpfulIconContainer>
      </Helpful>
      <Hr />
    </ReviewsContainer>
  );
}

export default Review;
