import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1442512595333-e89254d35e12?q=80&w=800&auto=format&fit=crop',
];

interface Props {
  imageUrl?: string;
}

export default function CafeHeader({ imageUrl }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (imageUrl) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imageUrl]);

  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
      <AnimatePresence mode="wait">
        <motion.img
          key={imageUrl || IMAGES[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          src={imageUrl || IMAGES[index]}
          alt="Cafe"
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-app to-transparent opacity-60"></div>
    </div>
  );
}
