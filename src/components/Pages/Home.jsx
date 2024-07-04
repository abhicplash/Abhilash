import React from "react";
import HomeBanner from "../Layout/HomeBanner";
import About from "../Layout/About";
import Layout from "../Layout/Layout";
import Projects from "../Layout/Projects";

function Home() {
  return (
    <Layout>
      <>
        <HomeBanner />
        <About />
        <Projects/>
      </>
    </Layout>
  );
}

export default Home;
