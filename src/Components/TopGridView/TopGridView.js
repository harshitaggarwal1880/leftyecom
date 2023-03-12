import React, { useRef } from "react";
import styled from "styled-components";
import { IoGrid, IoList } from "react-icons/io5";
import { useFilterContext } from "../../Contexts/filtercontext";

const TopGridView = () => {
  const { filter_products, grid_view, set_gridview, set_listview, sorting } =
    useFilterContext();

  // const SelectRef = useRef();


  // const handlesorting=()=>{
  //   // console.log(SelectRef.current.value);
  //   sorting(SelectRef.current.value);
  // }

  return (
    <Wrapper>
      {/* <div className="container"> */}
        <div className="sorting-list--grid">
          <button
            className={grid_view ? "sort_btn active" : "sort_btn"}
            onClick={set_gridview}
          >
            {" "}
            <IoGrid className="icon" />{" "}
          </button>
          <button
            className={!grid_view ? "sort_btn active" : "sort_btn"}
            onClick={set_listview}
          >
            
            <IoList className="icon" />{" "}
          </button>
        </div>

        <div className="available">
          {filter_products.length} Products Available
        </div>



        {/* Third Column */}
        <div className="sort-selection">
          <form>
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
              <option value="normal">Normal</option>
              <option value="lowest"> Price(Lowest)</option>
              <option value="highest"> Price(Highest)</option>
              <option value="a-z">Price(A to Z)</option>
              <option value="z-a">Price(Z to A)</option>
            </select> 
          </form>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  // margin-top: 5rem;
  padding: 1rem; 


  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default TopGridView;
