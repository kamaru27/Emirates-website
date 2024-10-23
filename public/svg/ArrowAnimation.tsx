"use client";
import React from "react";
import styled from "styled-components";

const ArrowAnimation = () => {
  return (
    <StyledWrapper>
      <button>
        <svg
          fill="#ffffff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 92 92"
          enableBackground="new 0 0 92 92"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_512_"
              d="M82.8,48.8l-24.9,25c-0.8,0.8-1.8,1.2-2.8,1.2c-1,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4.1,0-5.7L70.4,50H12 
              c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4h58.4L52.2,23.8c-1.6-1.6-1.6-4.1,0-5.7c1.6-1.6,4.1-1.6,5.7,0l24.9,25 
              C84.4,44.7,84.4,47.3,82.8,48.8z"
            ></path>
          </g>
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 20px;
    color: black;
    width: 60px;
    height: 60px;
    cursor: pointer;
    animation: bounce_513 3s infinite;
  }

  

  @keyframes bounce_513 {
    0%,
    100% {
      transform: translateX(-95%);
      animation-timing-function: cubic-bezier(0.8, 0, 1.5, 2);
    }

    50% {
      transform: translateX(40%);
      animation-timing-function: cubic-bezier(0, 0, 0.2, );
    }
  }
`;

export default ArrowAnimation;