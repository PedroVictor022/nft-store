import styled from "styled-components";
import { Button } from "../utils/button";

export const FirstSection = () => {
  return (
    <Container>
      <TitleSection>
        Descubra e o obtenha <SpecialText>obras de arte</SpecialText> digitais
        super raras
      </TitleSection>
      <TextSection>
        O maior mercado NFT. Criação digital autêntica e verdadeiramente única.
        Assinado e emitido pelo criador, possibilitado pela tecnologia
        blockchain
      </TextSection>
      <Button widthButton={"200px"}>EXPLORAR</Button>
    </Container>
  );
};

const Container = styled.div``;
const TitleSection = styled.h1`
  font-size: 56px;
  font-weight: 700;
`;
const SpecialText = styled.span`
  background: -webkit-linear-gradient(45deg, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextSection = styled.span`
  font-size: 20px;
`;
