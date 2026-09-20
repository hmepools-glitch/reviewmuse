import { ArrowLeft } from 'lucide-react';
import CafeHeader from './CafeHeader';

interface Props {
  activeReview: Review | null;
  onBack: () => void;
  onSelect: (angle: string) => void;
}

export default function AngleSelection({ activeReview, onBack, onSelect }: Props) {
  const angles = ['เช้าวันช้าที่คาเฟ่', 'มุมแสงเช้าที่ชอบ', 'พักสักนิดระหว่างวัน'];
  
  return (
    <div className="space-y-6">
      <CafeHeader imageUrl={activeReview?.images[activeReview.coverImageIndex]} />
      <button onClick={onBack} className="flex items-center text-text-secondary"><ArrowLeft className="w-5 h-5 mr-1" /> ย้อนกลับ</button>
      <h2 className="text-2xl font-bold">เลือกมุมเล่า</h2>
      
      <div className="space-y-4">
        {angles.map(angle => (
          <button 
            key={angle}
            onClick={() => onSelect(angle)}
            className="w-full text-left bg-bg-card p-4 rounded-full border border-border-card transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-action-secondary hover:shadow-neon-secondary"
          >
            {angle}
          </button>
        ))}
      </div>
    </div>
  );
}
