import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className='py-20 bg-gray-100 dark:bg-gray-800'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-3xl font-bold mb-6'>
          Projenize Başlamaya Hazır mısınız?
        </h3>
        <p className='text-xl mb-8'>Birlikte olağanüstü bir şey yaratalım.</p>
        <Button size='lg' className='text-xl py-6'>
          İletişime Geçin
        </Button>
      </div>
    </section>
  );
}
