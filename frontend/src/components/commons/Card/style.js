import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  min-width: 50rem;
  max-width: 50rem;
  min-height: 10rem;
  max-height: 20rem;
  background-color: #ffffff;
  box-shadow: 2px 3px 3px #444444;
  margin-bottom: 1rem;
  /* padding: 1.5rem; */

  &:hover {
      background-color: #eeeeee;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .date {
      font-weight: bold;
    }

    h2 {
      margin: 0;
    }

    .jobMetaData {
      margin-top: 7%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .jobMetaData .userIcon {
      width: 3rem;
      height: auto;

      margin-right: 0.5rem;
    }

    .jobMetaData img {
      width: 4rem;
      height: 4rem;

      border-radius: 5px;

      margin-right: 1rem;
    }

    .jobMetaData svg {
      width: 100%;
      height: 100%;
    }
  }

  .jobName {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: bold;

    margin: 1% 0 1% 5%;
  }

  .body {
    display: flex;
    align-items: center;

    & > p {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      padding: 0.5rem 1.4rem 0.5rem 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .generalInfo {
      min-width: 20%;
      margin-left: auto;
      margin-bottom: 2%;
      & span {
        display: flex;
      }

      & p {
        font-weight: bold;
        margin-left: 0.2rem;
        margin-bottom: 0.5rem;
        /* white-space: nowrap; */
      }
    }
  }

  .favIcon, .delIcon {
    position: absolute;
    right: 4%;
    bottom: 4%;
    z-index: 10;
  }

  .favIcon svg:hover {
    color: red;
    cursor: pointer;
  }

  .delIcon svg {
    color: red;
    cursor: pointer;
  }

  .favIcon.selected svg * {
    color: red;
    fill: red;
  }

  & a {
    min-width: 100%;
    min-height: 90%;
    display: inline-block;
    padding: 1.5rem;
  }
`;
