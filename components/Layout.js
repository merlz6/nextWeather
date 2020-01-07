import Nav from "./Nav";
import Head from "next/head";
import Weather from '../components/Weather';

const Layout = (props) => (
    <div>
      <Head>
        <title>nextWeather</title>
        <link rel="icon" href=""/>
      </Head>
      <Nav />

    </div>
)

export default Layout;
