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
      <div className="user-table">
        <div className="user">
          <>
            <span>Travis</span>
          </>
          <div className="user-info">
            <div className="coin">
              <span>230.32 ETH</span>
              <span>+50.20%</span>
            </div>
            <div className="media">
              <span>Piso</span>
              <span>+50.20%</span>
            </div>
            <span>320</span>
          </div>
        </div>
        <div className="user">
          <>
            <span>Travis</span>
          </>
          <div className="user-info">
            <div className="coin">
              <span>230.32 ETH</span>
              <span>+50.20%</span>
            </div>
            <div className="media">
              <span>Piso</span>
              <span>+50.20%</span>
            </div>
            <span>320</span>
          </div>
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

    span {
      margin-bottom: 1rem;
    }

    .collect-info {
      display: flex;
      gap: 6rem;
    }
  }

  .user-table {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
      margin-top: 1rem;
    }
    
    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .user-info {
      display: flex;
      gap: 4.5rem;

      .coin {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
      }

      .media {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Colections;
