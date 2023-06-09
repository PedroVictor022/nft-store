import styled from "styled-components";

import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m3 from "../../assets/m3.png"
import { SpecialText } from "../stats";

const TopsNFT = () => {
  return (
    <Container>
      <SpecialText>TOP NFTs</SpecialText>
      <NFTContainer>
        <img src={m1} alt="NFT Image" />
        <img src={m2} alt="NFT Image" />
        <img src={m3} alt="NFT Image" />
      </NFTContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const NFTContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top:5rem;
  img {
    width: 400px;
  }

  @media (max-width:1550px) {
    img {
      width: 310px;
    }
  }

  @media (max-width:1310px) {
    img {
      width: 230px;
    }
  }

  @media (max-width:1150px) {
    img {
      width: 180px;
    }
  }
  @media (max-width:800px) {
    flex-direction: column;
  }
`;

export default TopsNFT;
