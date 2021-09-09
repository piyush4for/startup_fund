//rather then importing to index.js we export index to layout.js
import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
// put tags in head of html
import Header from "./Header";

export default (props) => {
  return (
    <div>
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
        </Head>

        <Header />
        {props.children}
      </Container>
    </div>
  );
};
