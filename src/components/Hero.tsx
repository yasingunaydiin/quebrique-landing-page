'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BrickWall, Palette, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative py-20 overflow-hidden bg-gradient-to-r from-purple-700 to-blue-500'>
      <div className='absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]' />
      <div className='absolute inset-0 bg-gradient-to-r from-purple-700/50 to-blue-500/50 backdrop-blur-[2px]' />
      <div className='container relative mx-auto px-4 text-center'>
        <motion.h1
          className='text-5xl font-bold mb-6 text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Özel Tuğla Tasarımı
        </motion.h1>
        <motion.p
          className='text-xl mb-8 text-gray-200'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tasarımımıza güvenin. Vizyonunuzu oluşturun. Mirasınızı inşa edin.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size='lg'
            className='text-xl py-6 px-8 bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            Kendi Tuğlanızı Tasarlayın
          </Button>
        </motion.div>
        <div className='mt-16 flex justify-center space-x-8'>
          {[
            { Icon: BrickWall, label: 'Birinci Sınıf Malzemeler' },
            { Icon: Palette, label: 'Özel Tasarımlar' },
            { Icon: Truck, label: 'Ülke Çapında Teslimat' },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              className='flex flex-col items-center text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <Icon className='h-12 w-12 mb-2' />
              <span className='text-sm'>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
