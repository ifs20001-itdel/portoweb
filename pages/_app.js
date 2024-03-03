// pages/_app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Memuat font setelah komponen pertama kali dirender
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Anta&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Membersihkan link setelah komponen dibongkar
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full' style={{ fontFamily: 'Anta, sans-serif' }}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
