/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import ReviewHub from './components/ReviewHub';
import ReviewInfo from './components/ReviewInfo';
import AngleSelection from './components/AngleSelection';
import CaptionEditor from './components/CaptionEditor';
import { Review } from './types';

export type Screen = 'hub' | 'info' | 'angle' | 'caption' | 'details';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('hub');
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  return (
    <div className="w-[430px] h-[932px] bg-bg-app rounded-[48px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col mx-auto my-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a1a3a,_transparent)] opacity-50 pointer-events-none"></div>
      
      <div className="p-5 flex-grow overflow-y-auto relative z-10">
        <div className="text-center text-[10px] text-text-secondary mb-4 uppercase tracking-wider">โหมด Demo · Futuristic Design</div>
      {currentScreen === 'hub' && (
        <ReviewHub 
          onStartReview={() => { setActiveReview(null); setCurrentScreen('info'); }}
          onEditReview={(review) => { setActiveReview(review); setCurrentScreen('info'); }}
        />
      )}
      {currentScreen === 'info' && (
        <ReviewInfo 
          activeReview={activeReview}
          onBack={() => setCurrentScreen('hub')} 
          onNext={(data) => {
            // In a real app we'd create/update here.
            setActiveReview(prev => ({...prev, ...data} as Review));
            setCurrentScreen('angle');
          }} 
        />
      )}
      {currentScreen === 'angle' && (
        <AngleSelection 
          onBack={() => setCurrentScreen('info')} 
          onSelect={(angle) => {
            setActiveReview(prev => ({...prev, angle} as Review));
            setCurrentScreen('caption');
          }}
        />
      )}
      {currentScreen === 'caption' && (
        <CaptionEditor 
          activeReview={activeReview}
          onBack={() => setCurrentScreen('angle')}
          onDone={() => setCurrentScreen('hub')}
        />
      )}
      </div>
    </div>
  );
}
