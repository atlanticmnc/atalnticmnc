import { GoogleAnalytics } from 'nextjs-google-analytics';

import '@/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-H3VT8PTTYE" gtagUrl="https://www.googletagmanager.com/gtag/js?id=G-H3VT8PTTYE" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
