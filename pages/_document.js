import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
        />
        {/* theme meta */}
        <meta name="description" content="PT Dwi Panca Ekatama adalah perusahaan yang bergerak di bidang flange management, bolting service, dan rental hydraulics torque. Kami menyediakan layanan profesional dalam mengelola flange, melakukan pemasangan baut dengan presisi tinggi, dan menyewakan alat-alat hydraulics torque yang handal. Dengan pengalaman dan pengetahuan yang luas, tim kami siap membantu Anda dalam memastikan keandalan dan keamanan sistem flange serta menjaga kinerja yang optimal. Kami berkomitmen untuk memberikan solusi yang terbaik dan memenuhi kebutuhan pelanggan kami. Hubungi PT Dwi Panca Ekatama untuk layanan terpercaya dalam flange management, bolting service, dan rental hydraulics torque." />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PNPRVWZ');`}} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EKMN2J6D2Y"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-EKMN2J6D2Y');`}} />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#fff"
        />
      </Head>
      <body>
        <Main />
        {/* <TwSizeIndicator /> */}
        <NextScript />
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNPRVWZ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
      </body>
    </Html>
  );
};

export default Document;
