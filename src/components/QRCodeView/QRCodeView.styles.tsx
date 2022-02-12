import styled from "styled-components";

export const QRWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  flex-direction: column-reverse;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 3rem;

  position: absolute;
  background: linear-gradient(45deg, #becbf5, #a9bcf6, #416def);
  color: #233772;
  font-weight: 900;
  font-family: "Arial Black", sans-serif;

  @media screen and ( max-width: 666px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    row-gap: 2rem;

  }
`

export const ContextWrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h2, h3 {
    margin-bottom: 1.5rem;
  }
`

export const ImageWrapper = styled.img`
  width: 35vh;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;`