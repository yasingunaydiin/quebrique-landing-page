import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function Header() {
  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Quebrique</h1>
        <div className='flex items-center space-x-4'>
          <PhoneCall className='h-5 w-5' />
          <span className='text-lg'>+90 541 768 87 51</span>
          <Button>Bizi Arayın</Button>
        </div>
      </div>
    </header>
  );
}
