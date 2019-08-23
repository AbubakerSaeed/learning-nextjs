import styled from "styled-components";

const Box = styled.div`
  margin: 16rem 0;
`

const Title = styled.h1`
  border-bottom: 1px solid hsla(0, 0%, 100%, .2);
  padding-bottom: 3rem;
  margin: 2rem 0;
  font-weight: normal;
`

export function Hey() {
  return (
    <React.Fragment>
      <Box>
        <Title>With Named Export (DynamicFunctions.jsx)</Title>
        <p>I am function Hey().</p>
      </Box>
    </React.Fragment>
  )
}

export function Bye() {
  return (
    <React.Fragment>
      <Box>
        <Title>With Named Export (DynamicFunctions.jsx)</Title>
        <p>I am function Bye().</p>
      </Box>
    </React.Fragment>
  )
}

export function noSSR() {
  return (
    <React.Fragment>
      <Box>
        <Title>No SSR (DynamicFunctions.jsx)</Title>
        <p>I am CSR.</p>
      </Box>
    </React.Fragment>
  )
}