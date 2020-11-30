import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  min-width: 30rem;
  max-width: 50rem;
  min-height: 10rem;
  max-height: 15rem;
  background-color: #ffffff;
  box-shadow: 2px 3px 3px #444444;
  padding: 1.5rem;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    p {
      font-weight: bold;
    }
  }

  .body {
    display: flex;
    align-items: center;

    & > p {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      padding-right: 1.4rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .generalInfo {
      & span {
        display: flex;
      }

      & p {
        font-weight: bold;
        margin-left: 0.2rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .favIcon {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

  .favIcon svg:hover {
    color: red;
    cursor: pointer;
  }

  .favIcon.selected svg * {
    color: red;
    fill: red;
  }
`;
