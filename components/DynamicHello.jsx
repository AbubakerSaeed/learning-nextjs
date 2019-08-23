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

export default () => (

  <>
    <Box>
      <Title>Dynamic Component</Title>
      <a href="https://github.com/tc39/proposal-dynamic-import">
        tc39 proposal: Dynamic Import
      </a>
      <p>Component will be dynamically load, depends on how we set it (onRequest, onPageLoad(default) etc).</p>
    </Box>
  </>
)