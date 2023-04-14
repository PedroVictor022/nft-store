import styled from "styled-components";
import { Button } from "../utils/button";

const Colections = () => {
  return (
    <Container>
      <div className="top-table">
        <span>Colecionadores</span>
        <Button>VER TODOS</Button>
      </div>
      <div className="header-table">
        <>
          <span>Colecionadores</span>
        </>
        <div className="collect-info">
          <span>Volume</span>
          <span>Piso</span>
          <span>Items</span>
        </div>
      </div>
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
    button {
      width: 180px;
    }
  }

  .header-table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid orange;

    .collect-info {
      display: flex;
      gap: 6rem;
    }
  }
`;

export default Colections;
