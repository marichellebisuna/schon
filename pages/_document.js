import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link
            href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900,900italic%7cMontserrat:400,700%7cOxygen:400,300,700'
            rel='stylesheet'
            type='text/css'
          />
          <link rel='stylesheet' href='css/bootstrap.css' />
          <link rel='stylesheet' href='css/animate.css' />
          <link rel='stylesheet' href='css/icon-fonts.css' />
          <link rel='stylesheet' href='css/main.css' />
          <link rel='stylesheet' href='css/responsive.css' />

          <script src='js/jquery.js'></script>
          <script src='js/plugins.js'></script>
          <script src='js/bootstrap.js'></script>
          <script src='js/jquery.main.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
