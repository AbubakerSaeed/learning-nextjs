import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 14rem 2rem;
    font-family: 'Segoe Ui';

    color: hsl(0, 0%, 92%);
    background: hsl(0, 0%, 10%);
  }

   a {
    font-size: 2rem;
    color: hsl(30, 50%, 50%);
  }

  p {
    background: hsla(0, 0%, 0%, .03);
    border-left: 4px solid hsl(15, 50%, 50%);
    padding: 2rem;
    margin: 2rem 0;
    font-size: 1.6rem;
    font-weight: italic;
  }

`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
  background: hsl(15, 0%, 16%);
  box-shadow: 0 .4rem 2rem hsla(0, 0%, 0%, .2);
`;

const HeaderLink = styled.a`
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: bold;
  padding: .8rem 2rem;
  color: ${({active}) => active ? "hsl(15, 50%, 50%)" : "hsl(0, 0%, 90%)"};
  margin-right: ${({noMarginRight}) => noMarginRight ? "0" : "20px"};
  text-decoration: none;
  position: relative;

  &:hover,
  &:focus {
    color: ${({active}) => active ? "hsl(15, 50%, 50%)" : "hsl(0, 0%, 74%)"};
    background: hsla(0, 0%, 90%, .1);
  }

  &::after {
    content: ${({noMarginRight}) => noMarginRight ? "" : "'/'"};
    position: absolute;
    right: -1.2rem;
    color: hsl(0, 0%, 90%);
    opacity: .4;
  }
`

const ActiveLink = ({href, children, noMarginRight}) => {

  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <HeaderLink
      href={href}
      onClick={handleClick}
      active={(router.pathname === href)}
      noMarginRight={noMarginRight}
    >{children}</HeaderLink>
  )

}

export default () => (
  <>
    <GlobalStyle />
    <Header>

      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
      <ActiveLink href="/dynamic" noMarginRight>Dynamic</ActiveLink>

    </Header>
  </>
)