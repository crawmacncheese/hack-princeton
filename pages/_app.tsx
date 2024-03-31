import "../styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import type { AppProps } from "next/app";
import { Auth } from "../components/menu/Auth";
import Head from "next/head";

require("dotenv").config();
console.log(process.env.HUME_KEY);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hume AI | Sandbox</title>
        <meta name="title" content="Hume AI | Sandbox" />
        <meta name="description" content="Hume Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-screen min-h-screen bg-neutral-100 font-main font-thin text-neutral-800">
        <Auth>
          <div>
            <Component {...pageProps} />
          </div>
        </Auth>
      </div>
    </>
  );
}
