import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
		gap: 2rem;

		img {
			width: 150px;
		}

    button {
      padding: 0 .5rem;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    white-space: nowrap;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
