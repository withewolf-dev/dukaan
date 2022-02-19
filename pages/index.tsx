import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FreeProduct from '../components/FreeProduct'
import Middle from '../components/Middle'
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
        <div className="mt-[1900px]">
          <Middle />
          <FreeProduct />
          <Footer />
        </div>
      </main>
    </div>
  )
}
