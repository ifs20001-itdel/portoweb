import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [audio, setAudio] = useState(null);

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

  useEffect(() => {
    if (!audio) {
      // Deklarasi Audio saat komponen pertama kali dirender di sisi klien
      setAudio(new Audio('/musik.mp3'));
    } else {
      // Set volume default menjadi 50%
      audio.volume = 0.5;
      // Memainkan musik saat komponen pertama kali dirender
      audio.play();
    }

    // Membersihkan musik saat komponen dibongkar
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  useEffect(() => {
    // Memainkan ulang musik saat pengguna berpindah halaman
    const handleRouteChange = () => {
      if (audio) {
        audio.play();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, audio]);

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