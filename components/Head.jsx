import Head from 'next/head';

// About Head
// title & meta should be direct children of Head or wrapped into maximum one level of React.Fragment

export default ({title, children}) => (

  <Head>
    <title>{title}</title>
    {children}
  </Head>

)