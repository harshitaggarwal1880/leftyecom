import React from "react";
import styled from "styled-components";

const List_card = ({ data }) => {
  return (
    <Wrapper>
      <div class="container">
        <div class="img">
          <img src={data.image} alt={data.name} className="box" />
        </div>
        <div class="info">
          <div class="title">{data.name}</div>
          <p>{data.description.substr(0, 60)}...</p>
          <button className="btn"> Read more</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    border: 2px solid;
    height: 100%;
    display: gird;
    grid-template-columns: 30% 60%;
    // height: 30vh;
    margin: 1rem;
  }

  .img {
    // height: 30vh;
      width: 100%;
    // border: 2px solid red;
    margin-right: 1rem;
  }

  .box {
    height: 100%;
    width: 100%;
  }

  .info {
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    font-weight: 500;
    text-transform: capitalize;
  }

  .btn {
    //   background-color: yellow;
    padding: 0.5rem 0;
    // font-size: 1rem;
    //   border-radius: 1rem;
    width: 15vw;
  }

  // @media screen and (max-width: 425px) {
  //   .info {
  //     // font-size: 0.5rem;
  //   }

  //   .container {
  //     width: 95%;
  //   }
  // }
`;

export default List_card;
