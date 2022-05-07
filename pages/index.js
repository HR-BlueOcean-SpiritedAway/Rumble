import Head from 'next/head';
import Link from 'next/link';
import { auth } from '../firebase';

/* *****************************************************************************
* SOME NOTES:
* - React, useState, useEffect, etc. are automatically imported in Next.js, so
*   no need to do so manually!
* - This /pages directory takes the place of React Router -- if you make a file
*   in this directory called example.js, you can navigate to that page by going
*   to localhost:PORT/example
* - Next has some components (Google for more) you should get familiar with:
*   ~ <Link> : Used to navigate between pages
*   ~ <Image> : Replaces <img> tags -- does lazy loading automatically!
***************************************************************************** */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rumble</title>
        <meta name="description" content="Blue Ocean project for Hack Reactor RFP2202" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-red-500">
          This is the home page.
        </h1>
        <p>
          <Link href="/example">
            <a className="underline text-blue-500">Example link</a>
          </Link>
        </p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </main>

    </div>
  );
}
