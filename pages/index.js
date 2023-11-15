import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="example1"></div>
    <script src="/js/pdfobject.js"></script>
<script>PDFObject.embed("2023_PORTFOLIO_CamillaMarani.pdf", "#example1");</script>
      </main>

      <Footer />
    </div>
  )
}
