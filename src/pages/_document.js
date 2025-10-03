// pages/_document.js
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Load Aileron from CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/impallari/Aileron@master/fonts.css"
        />
      </Head>
      <body className="font-aileron">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
