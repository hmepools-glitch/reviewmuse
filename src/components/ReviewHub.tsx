import { Search, SlidersHorizontal, Plus, Star } from 'lucide-react';
import { useReviewStore } from '../hooks/useReviewStore';
import { Review } from '../types';
import CafeHeader from './CafeHeader';

interface Props {
  onStartReview: () => void;
  onEditReview: (review: Review) => void;
}

export default function ReviewHub({ onStartReview, onEditReview }: Props) {
  const { reviews } = useReviewStore();

  const fallbackImage = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop';

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
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="ค้นหารีวิว..." 
              className="w-full bg-bg-card border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-action-primary transition-colors"
            />
          </div>
        </div>
      </section>

      <div className="space-y-6">
        {reviews.map(review => (
          <div 
            key={review.id} 
            className="group bg-bg-app rounded-3xl border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          >
             <div className="h-40 w-full overflow-hidden">
               <img 
                 src={review.images.length > 0 ? review.images[review.coverImageIndex] : fallbackImage} 
                 alt={review.locationName} 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="p-5 space-y-3">
               <div className="flex justify-between items-start">
                 <h3 className="font-bold text-lg text-white">{review.locationName}</h3>
                 <span className="text-xs bg-action-primary/20 text-action-primary px-2 py-1 rounded-full">{review.locationType}</span>
               </div>
               
               <div className="flex items-center text-action-primary">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
               </div>

               <p className="text-sm text-text-secondary line-clamp-2 italic">"{review.experience}"</p>
               
               <button 
                onClick={() => onEditReview(review)}
                className="w-full bg-white/5 border border-white/10 text-white text-sm font-semibold py-2 rounded-full hover:bg-action-primary/20 hover:border-action-primary transition-all duration-300"
              >
                 ดูรายละเอียด
               </button>
             </div>
          </div>
        ))}
      </div>

      <button onClick={onStartReview} className="w-full bg-action-primary text-action-text font-semibold py-3 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-neon-primary hover:shadow-neon-primary-hover border border-white/20 flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        เริ่มรีวิวใหม่
      </button>
    </div>
  );
}
