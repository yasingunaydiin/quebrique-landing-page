import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Özel Tasarım',
      description: 'Benzersiz tuğla desenleri oluşturun',
      // icon: <Palette className='h-10 w-10 m-2 text-primary' />,
      details:
        'Vizyonunuzu hayata geçirmek için uzman tasarımcılarımızla birlikte çalışın.',
      color: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      title: 'Birinci Sınıf Malzemeler',
      description: 'Yüksek kaliteli tuğla üretimi',
      // icon: <Brick className='h-10 w-10 m-2 text-primary' />,
      details:
        'Dayanıklılık ve estetik için yalnızca en iyi malzemeleri kullanıyoruz.',
      color: 'bg-red-100 dark:bg-red-900',
    },
    {
      title: 'Ülke Çapında Teslimat',
      description: 'Hızlı ve güvenli gönderim',
      // icon: <Truck className='h-10 w-10 m-2 text-primary' />,
      details: 'Özel tuğlalarınızı ülkenin her yerine teslim ediyoruz.',
      color: 'bg-green-100 dark:bg-green-900',
    },
  ];

  return (
    <section className='py-20 bg-background' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>Hizmetlerimiz</h2>
        <p className='text-xl text-center text-muted-foreground mb-12'>
          Projelerinizi nasıl dönüştürebileceğimizi keşfedin
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='overflow-hidden transition-all duration-300 hover:shadow-lg'
            >
              <div className={`p-1 ${service.color}`}></div>
              <CardHeader>
                <CardTitle className='text-2xl'>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='mb-4'>{service.details}</p>
                <Button variant='outline' className='group'>
                  Daha Fazla Bilgi
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
