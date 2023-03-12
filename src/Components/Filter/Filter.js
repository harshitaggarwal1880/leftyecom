import React, { useContext } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../Contexts/filtercontext";
import { FaCheck } from "react-icons/fa";
import { Form } from "react-router-dom";
import FormatPrice from "../FormatPrice/FormatPrice";
import { Button } from "../Button/Button";


const Filter = () => {
  const {
    filter: { text, category, color,price,minPrice,maxPrice},
    all_products,
    updateFilterValue,
    clearFilters
  } = useFilterContext();

  // get unique filter values

  const uniqueFilterData = (data, attr) => {
    let filterlist = data.map((ele) => {
      return ele[attr];
    });

    if (attr === "colors") {
      filterlist = filterlist.flat();
    }

    return (filterlist = ["All", ...new Set(filterlist)]);
  };

  const categoryData = uniqueFilterData(all_products, "category");
  const companyData = uniqueFilterData(all_products, "company");
  const colorsData = uniqueFilterData(all_products, "colors");

  // console.log(categoryData)
  // console.log(companyData)
  // console.log(colorsData)

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search"
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

          
      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
       

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
            
            {colorsData.map((curColor, index) => {
            
            if(curColor==="All"){
            
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  All {color === curColor ? <FaCheck /> : null }
                </button>
              );  
            }

            
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={curColor===color ? "btnStyle colorcircle active" : "btnStyle colorcircle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null }
              </button>
            );
          })}
        </div>
      </div>


      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price}/>
        </p>
          <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
      </div>


      <div className="filter-clear">
        <Button onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  .colorcircle {
    height: 1.6rem;
    width: 1.6rem;
    margin-left: 5px;
    border-radius: 1rem;
    opacity: 0.8;
  }

  .colorcircle:hover {
    opacity: 1;
    border-color: red;
    transform: scale(1.2);
  }

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      // width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    // font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;  
  }

  .filter-colors{
    width: 60%;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filter;
