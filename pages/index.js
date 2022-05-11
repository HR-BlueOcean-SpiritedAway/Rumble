import Head from 'next/head';
import Link from 'next/link';
import { auth } from '../firebase';

// Components
import Homepage from './Page-B-homepage.js';

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
          This is the Directory page.
        </h1>
        <br/>

        <Link href="Page-B-homepage">
          <a className="underline text-green-500"> Page B Link</a>
        </Link>
        <br/>

        <Link href="Page-C-SwipeSolo">
          <a className="underline text-green-500"> Page-C-SwipeSolo</a>
        </Link>
        <br/>

        <Link href="Page-D-SwipeGroup">
          <a className="underline text-blue-500">Page-D-SwipeGroup[need to do] </a>
        </Link>
        <br/>

        <Link href="/Page-E-matchGroup">
          <a className="underline text-green-500">Page-E-matchGroup</a>
        </Link>
        <br/>

        <Link href="Page-F-matchGroupDecision">
          <a className="underline text-green-500">Page-F-matchGroupDecision</a>
        </Link>
        <br/>
        <Link href="/Page-G-Settings">
          <a className="underline text-green-500">Page-G-Settings</a>
        </Link>
        <br/>

        <Link href="/Page-H-BrowseRestaurants">
          <a className="underline text-green-500">Page-H-Browse Restaurants</a>
        </Link>
        <br/>

        <Link href="/Page-I-Cart">
          <a className="underline text-green-500">Page-I-Cart</a>
        </Link>
        <br/>

        <Link href="/Page-J-Restaurant">
          <a className="underline text-blue-500">Page-J-Restaurant</a>
        </Link>
        <br/>

        <Link href="Page-K-FavoritesPage">
          <a className="underline text-green-500"> Page K FavoriteRestaurants</a>
        </Link>
        <br/>

        <Link href="/Page-L-SelectedRestaurants">
        <a className="underline text-green-500">Page L Top Three Restaurants</a>
        </Link>
        <br/>

        <Link href="Page-H-BrowseRestaurants">
          <a className="underline text-green-500">Page H Link</a>
        </Link>
        <br/>
            
        <button onClick={() => auth.signOut()}>Sign out</button>
      </main>
    </div>
  );
}
