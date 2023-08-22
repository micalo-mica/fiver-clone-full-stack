import styled from "styled-components";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import PropertyDetailCard from "../../../../Aztech/client/src/components/forPropertyDetail/PropertyDetailCard";
import SliderCard from "./SliderCard";
import { projects } from "../static/sli";

const S = styled.div`
  padding-top: 2rem;
  z-index: 1;
`;

const Slide = ({ images }) => {
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
            itemsToShow: 5,
            itemsToScroll: 5,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {projects &&
          projects.map((image, i) => {
            return <SliderCard key={i} img={image.img} />;
          })}
      </ReactSimplyCarousel>
    </S>
  );
};
export default Slide;
