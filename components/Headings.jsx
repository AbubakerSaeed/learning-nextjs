import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 3.2rem;
  letter-spacing: .4rem;
  margin: 3rem 0;
  text-align: center;

  &::before {
    content: ${({h}) => h ? '"#"' : ''};
    margin-right: 1rem;
  }
`

const Heading2 = styled.h2`
  font-size: 2.6rem;
`

const Heading3 = styled.h3`
  font-size: 2rem;
`

export const H1 = ({heading, id}) => <Heading1 id={id ? id : undefined} h={(id !== undefined)}>{heading}</Heading1>
export const H2 = ({heading, id}) => <Heading2 id={id ? id : undefined} h={(id !== undefined)}>{heading}</Heading2>
export const H3 = ({heading, id}) => <Heading3 id={id ? id : undefined} h={(id !== undefined)}>{heading}</Heading3>