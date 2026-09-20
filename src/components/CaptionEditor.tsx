import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import CafeHeader from './CafeHeader';
import { Review } from '../types';

interface Props {
  activeReview: Review | null;
  onBack: () => void;
  onDone: () => void;
}

export default function CaptionEditor({ activeReview, onBack, onDone }: Props) {
  const [caption, setCaption] = useState(activeReview?.platforms.Instagram.caption || 'เช้านี้ขอใช้เวลาช้าลงสักนิด ☕...');
  
  return (
    <div className="space-y-6">
      <CafeHeader imageUrl={activeReview?.images[activeReview.coverImageIndex]} />
      <button onClick={onBack} className="flex items-center text-text-secondary"><ArrowLeft className="w-5 h-5 mr-1" /> ย้อนกลับ</button>
      <h2 className="text-2xl font-bold">เขียน Caption</h2>
      
      <textarea 
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full h-40 bg-bg-card border border-border-card rounded-lg p-3 text-text-primary"
      />
      
      <button className="w-full bg-action-primary text-action-text font-semibold py-3 rounded-xl">
        คัดลอก Caption
      </button>
    </div>
  );
}
