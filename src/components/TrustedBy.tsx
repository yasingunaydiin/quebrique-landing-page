import Image from 'next/image';

export default function TrustedBy() {
  const logos = [
    { src: '/images/Dominos-logo.png', alt: 'Dominos' },
    { src: '/images/Netflix-logo.png', alt: 'Netflix' },
    { src: '/images/Penske-logo.png', alt: 'Penske' },
    { src: '/images/Pinterest-logo.png', alt: 'Pinterest' },
  ];

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h3 className='text-2xl font-semibold text-center mb-12'>
          Sektör Liderleri Tarafından Güveniliyor
        </h3>
        <div className='flex justify-center items-center space-x-12 grayscale'>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
