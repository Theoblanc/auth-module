import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<IProps> {
  // static async getInitialProps({ renderPage }) {

  // }

  render() {
    return (
      <html lang='ko'>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
