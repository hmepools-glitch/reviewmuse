import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Review } from '../types';
import CafeHeader from './CafeHeader';

interface Props {
  activeReview: Review | null;
  onBack: () => void;
  onNext: (data: Partial<Review>) => void;
}

export default function ReviewInfo({ activeReview, onBack, onNext }: Props) {
  const [name, setName] = useState(activeReview?.locationName || '');
  const [experience, setExperience] = useState(activeReview?.experience || '');
  
  return (
    <div className="space-y-6">
      <CafeHeader imageUrl={activeReview?.images[activeReview.coverImageIndex]} />
      <button onClick={onBack} className="flex items-center text-text-secondary"><ArrowLeft className="w-5 h-5 mr-1" /> ย้อนกลับ</button>
      <h2 className="text-2xl font-bold">ข้อมูลรีวิว</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">ชื่อสถานที่</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="พิมพ์ชื่อสถานที่..."
            className="w-full bg-bg-card border border-border-card rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">อยากเล่าอะไร?</label>
          <textarea 
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="มุมที่ชอบ เมนูที่ลอง บรรยากาศ..."
            className="w-full h-24 bg-bg-card border border-border-card rounded-lg p-3"
          />
        </div>
      </div>

      <button 
        onClick={() => onNext({ locationName: name, experience })}
        className="w-full bg-action-primary text-action-text font-semibold py-3 rounded-xl"
      >
        ไปเลือกมุมเล่า
      </button>
    </div>
  );
}
