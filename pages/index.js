import Link from "next/link";
import Router from "next/router";


import {useEffect} from "react";

import styled from "styled-components";

import Head from "../components/Head";
import { H1 } from "../components/Headings";

// styled component stuff
// ========================================================================
const Box = styled.div`
  width: 100%;
  padding: 4rem 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, .2);
  margin: 8rem 0;


  code {
    color: #fff;
    background: linear-gradient(to right bottom, hsl(15, 50%, 50%), hsl(30, 50%, 50%));
    box-shadow: 2px 2px 2.8rem hsla(15, 50%, 50%, .1);
    padding: .4rem .8rem;
    border-radius: .4rem;
    font-family: inherit;
  }
`

const SpanLink = styled.span`
  font-size: 2rem;
  border-bottom: 1px solid currentColor;
`

// Imperatively
// ========================================================================
/*
  - First object is href and second object is for as
  - Api's are same as <Link/>
*/
const handleRouterPush = () => {
  Router.push({
    pathname: "/about",
    query: {
      name: "yourName"
    }
  }, {
      pathname: '/about',
      hash: "Hello"
    })
}

// shallow routing
// ========================================================================
// Shallow routing works only for same page URL changes
const handleShallowRouting = (url) => {
  let href = url;
  let as = href;
  return Router.push(href, as, {shallow: true});
}

// Component
// ========================================================================
export default () => {

  useEffect(() => {
    // Router Events
    const handleRouteChange = url => console.log(url);
    Router.events.on('routeChangeStart', handleRouteChange);
    return () => Router.events.off('routeChangeStart', handleRouteChange);
  }, [])

  return (

    <>
      <Head title='Home Page'/>
      <H1 heading="Title 1"/>

      <Box>
        <Link href={{ pathname: '/about/' }} as={{ pathname: '/about/', hash: "title-2" }}>
          <a><span>{"<Link/>"}</span> About #title-2</a>
        </Link>
        <p>Example of <code>Link</code> component.</p>
      </Box>

      <Box>
        <SpanLink onClick={handleRouterPush}> {"<span/>"} About</SpanLink>
        <p>This element is actually a span and we are attaching a click event on it and when it get clicked, it'll used the <code>Router</code> api and will change the url to the url we passed.</p>
      </Box>

      <Box>
        <SpanLink onClick={() => handleShallowRouting('/?search=query')}>Shallow Routing</SpanLink>
        <p>Note about Shallow Routing: is in index.js before the function.</p>
      </Box>
    </>

  )

}