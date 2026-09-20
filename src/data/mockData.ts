import { Review } from '../types';

export const initialMockData: Review[] = [
  {
    id: '1',
    locationId: 'loc1',
    locationName: 'ละมุน คาเฟ่',
    locationType: 'คาเฟ่',
    dateVisited: '2026-09-20',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop'
    ],
    coverImageIndex: 0,
    experience: 'แสงเช้าสวย ร้านเงียบ กาแฟหอม มีมุมถ่ายรูปริมหน้าต่าง',
    angle: 'เช้าวันช้าที่คาเฟ่',
    lastEdited: '2026-09-20T10:00:00Z',
    currentStep: 3,
    platforms: {
      Instagram: {
        tone: 'ละมุน',
        caption: 'เช้านี้ขอใช้เวลาช้าลงสักนิด ☕\n\nแสงอุ่นริมหน้าต่าง กาแฟหอม ๆ และมุมเงียบที่ละมุน คาเฟ่ เป็นช่วงพักเล็ก ๆ ที่อยากเก็บไว้\n\n#คาเฟ่ #CafeHopping',
        status: 'ร่าง',
      },
      Facebook: {
        tone: 'ละมุน',
        caption: 'วันนี้แวะละมุน คาเฟ่ ชอบแสงเช้าตรงริมหน้าต่างเป็นพิเศษ ร้านเงียบและกาแฟหอม เลยได้ใช้เวลานั่งพักพร้อมเก็บภาพมุมที่ชอบกลับมา ใครชอบบรรยากาศแบบนี้ น่าจะเข้าใจว่าทำไมเราอยากค่อย ๆ ใช้เวลาอยู่ตรงนั้น',
        status: 'ร่าง',
      }
    }
  },
  // Add other mock reviews...
];
