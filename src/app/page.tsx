import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustedBy from '@/components/TrustedBy';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-900'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <TrustedBy />
        <Services />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
