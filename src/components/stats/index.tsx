import styled from "styled-components";
import "swiper/css";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";

export const Stats = () => {
  return (
    <Container>
      <div className="content">
        <Box>
          <SpecialText>300</SpecialText>
          <span>COLEÇÕES</span>
        </Box>
        <Box>
          <SpecialText>+100K</SpecialText>
          <span>USUÁRIOS</span>
        </Box>
        <Box>
          <SpecialText>+30K</SpecialText>
          <span>NEGOCIAÇÕES</span>
        </Box>
        <Box>
          <SpecialText>+1M</SpecialText>
          <span>VISUALIZAÇÕES</span>
        </Box>
      </div>
      {/* Carousel */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .content {
    display: flex;
    gap: 4rem;

    @media (max-width: 800px) {
      display: grid;
      padding: 0.2rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 0px solid;
  span {
    font-size: 30px;
  }
  @media (max-width: 1150px) {
    span {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    border-bottom: 2px solid orange;
  }
`;

export const SpecialText = styled.span`
  background: -webkit-linear-gradient(45deg, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: 700;
`;

export default Stats;
