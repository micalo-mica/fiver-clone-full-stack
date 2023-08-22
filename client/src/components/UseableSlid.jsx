import styled from "styled-components";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const S = styled.div`
  height: max-content;
`;

const UseableSlid = ({ children, slidesToShow, arrowsScroll }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <S>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "orange",
            // i added margin
            margin: "2px",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "orange",
            // i added margin
            margin: "2px",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: slidesToShow,
            itemsToScroll: arrowsScroll,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {children}
      </ReactSimplyCarousel>
    </S>
  );
};
export default UseableSlid;
