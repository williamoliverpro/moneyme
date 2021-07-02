import styled, { css } from "styled-components";

interface IContainerType {
  type: string;
}

export const Container = styled.div<IContainerType>`
  padding: 2rem;
  background-color: var(--shape);
  margin-bottom: 1rem;

  h1 {
    font-size: 1rem;
    font-weight: normal;
  }

  h1 + p {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    /* color: var(--green); */
    margin-bottom: 1.5rem;

    ${({ type }) =>
      type === "deposit"
        ? css`
            color: var(--green);
          `
        : css`
            color: var(--red);
          `};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;
    color: var(--text-body);
  }
`;
