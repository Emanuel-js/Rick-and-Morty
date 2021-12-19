import Layout from '../components/Layout'
import '../styles/globals.css'
import {LikeProvider } from '../context/LikeContext';
function MyApp({ Component, pageProps }) {
  return (
    <LikeProvider>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </LikeProvider>
  )
}

export default MyApp;
