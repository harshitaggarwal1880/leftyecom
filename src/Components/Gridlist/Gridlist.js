import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Gridlist = ({ data }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {data.filter_products.map((ele) => {
          return <Card className="card" key={ele.id} data={ele} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    // display: grid;
    // grid-template-columns: auto auto auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export default Gridlist;
