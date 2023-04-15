import styled from "styled-components";
import { Button } from "../utils/button";
import { SpecialText } from "../apresentation";

const Answers = () => {
  return (
    <Container>
      <div className="top-table">
        <span>Perguntas frequentes</span>
      </div>

      <Perguntas>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe nisi delectus?</span>
        <span> &gt; </span>
      </Perguntas>
       <Perguntas>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe nisi delectus?</span>
        <span> &gt; </span>
      </Perguntas>
       <Perguntas>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe nisi delectus?</span>
        <span> &gt; </span>
      </Perguntas>
       <Perguntas>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe nisi delectus?</span>
        <span> &gt; </span>
      </Perguntas>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;

  .top-table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    span {
      font-size: 40px;
      font-weight: 700;
    }
  }
`;

const Perguntas = styled.div`
  width: 100%;
  border-bottom: 2px solid purple;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap:3rem;

`;


export default Answers;
