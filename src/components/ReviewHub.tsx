import { Search, SlidersHorizontal, Plus } from 'lucide-react';
import { useReviewStore } from '../hooks/useReviewStore';
import { Review } from '../types';
import CafeHeader from './CafeHeader';

interface Props {
  onStartReview: () => void;
  onEditReview: (review: Review) => void;
}

export default function ReviewHub({ onStartReview, onEditReview }: Props) {
  const { reviews } = useReviewStore();

  return (
    <div className="space-y-6">
      <CafeHeader />
      
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">ReviewMuse</h1>
          <p className="text-sm text-text-secondary">บันทึกเรื่องราวดี ๆ จากสถานที่โปรด</p>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-2">งานรีวิว</h2>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="ค้นหาสถานที่หรือชื่อรีวิว" 
              className="w-full bg-bg-card border border-border-card rounded-lg py-2 pl-10 pr-4 text-sm"
            />
          </div>
          <button className="bg-bg-card border border-border-card p-2 rounded-lg">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </section>

      <div className="space-y-4">
        {reviews.map(review => (
          <button 
            key={review.id} 
            onClick={() => onEditReview(review)}
            className="w-full text-left bg-bg-card p-4 rounded-xl border border-border-card"
          >
             <div className="h-40 bg-gray-700 rounded-lg mb-3"></div>
             <h3 className="font-semibold">{review.locationName}</h3>
             <p className="text-sm text-text-secondary">{review.angle}</p>
             <p className="text-xs text-text-secondary mt-2">สถานะ: {review.platforms.Instagram.status}</p>
          </button>
        ))}
      </div>

      <button onClick={onStartReview} className="w-full bg-action-primary text-action-text font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        เริ่มรีวิวใหม่
      </button>
    </div>
  );
}
