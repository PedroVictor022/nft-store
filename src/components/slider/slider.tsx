import styled from "styled-components";

interface SliderItemProps {
  url: string;
  title: string;
}

export const SlideItemComponent = ({ url, title }: SliderItemProps) => {
  return (
    <CustomItem>
      <img src={url} alt={title} />
      <p>{title}</p>
    </CustomItem>
  );
};

const CustomItem = styled.div`
  width: 280px;
  height: 250px;
  position: relative;
  padding: 2rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  img {
    width: 280px;
    height: 200px;
    position: relative;
  }
  p {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background: #6464641f;
    box-shadow: 0 8px 32px 0 #1b1b1b5e;
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
  }
`;