import Head from 'next/head'
import Banner from '../components/Banner'
import SloganMaker from '../components/SloganMaker'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dukaan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Banner />
        <SloganMaker />
        asads
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer> */}
    </div>
  )
}
