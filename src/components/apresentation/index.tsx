import styled from "styled-components";
import { Button } from "../utils/button";

import nft from "../../assets/nft.png";
import eth from "../../assets/eth.png";

export const FirstSection = () => {
  return (
    <Container>
      <ContainerInfo>
        <h1>
          Descubra e o obtenha <SpecialText>obras de arte</SpecialText> digitais
          super raras
        </h1>
        <TextSection>
          O maior mercado NFT. Criação digital autêntica e verdadeiramente
          única. Assinado e emitido pelo criador, possibilitado pela tecnologia
          blockchain
        </TextSection>
        <Button widthButton={"200px"}>EXPLORAR</Button>
      </ContainerInfo>
      <ContainerImage>
        <div className="content">
          <img src={nft} className="nft" alt="Imagem da NFT" />
          <div className="info-menu">
            <div className="infos">
              <div className="tags">
                <h3 className="nft-title">Captain Jack</h3>
                <span className="creator">By Allan Nore</span>
              </div>
              <div className="price">
                <img src={eth} alt="Coin icon" />
                <span>18 ETH</span>
              </div>
            </div>
            <Button>COMPRAR</Button>
          </div>
        </div>
      </ContainerImage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10%;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const ContainerInfo = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 56px;
    font-weight: 700;
  }

  @media (max-width: 1150px) {
    width: 65%;
    h1 {
      font-size: 40px;
    }
  }
`;
const ContainerImage = styled.div`
  width: 50%;

  .content {
    max-width: 400px;

    /* background: rgba(255, 255, 255, 0.07); */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.2px);
    -webkit-backdrop-filter: blur(12.2px);

    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .nft {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    color: #111; 
    background: #00000017; 
    
  }

  .info-menu {
    box-shadow: 0 0 60px #6303e958;
    width: 100%;

    background: rgba(42, 42, 42, 0.07);
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(12.2px);
    -webkit-backdrop-filter: blur(12.2px);
    border: 1px solid rgba(56, 56, 56, 0.3);

    display: flex;
    align-items: center;
    justify-content: space-between;

    .infos {
      margin-left: 20px;
    }

    .price {
      margin-top: 10px;
      display: flex;
      align-items: center;
      span {
        margin-bottom: 23px;
      }
    }

    button {
      margin-right: 20px;
    }
  }

  @media (max-width: 1150px) {
    width: 40%;
    .content {
      max-width: 300px;
    }
    .info-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .infos {
        margin-left: 0;

        .tags {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 14px;
        }
        .price {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      button {
        margin-right: 0;
        margin-bottom: 22px;
      }
    }
    .nft {
      width: 290px;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const SpecialText = styled.span`
  background: -webkit-linear-gradient(45deg, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextSection = styled.span`
  font-size: 20px;
  @media (max-width: 1150px) {
    font-size: 16px;
  }
`;
