import App from "next/app";
import Header from "../components/Header";

// if there are shared components around pages we can add those here in App class
class MyApp extends App {

  render () {
    const { Component, pageProps } = this.props;

    return (
        <React.Fragment>
          <Header />
          <Component {...pageProps}/>
        </React.Fragment>
    )

  }

}

export default MyApp;