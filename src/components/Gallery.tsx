import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-12'>Çalışmalarımız</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[1, 2, 3, 4].map((num) => (
            <Card key={num} className='overflow-hidden'>
              <Image
                src={`/images/brick${num}.jpg`}
                alt={`Brick Design ${num}`}
                width={300}
                height={400}
                className='object-cover w-full h-full'
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
