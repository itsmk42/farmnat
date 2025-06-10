export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya K.',
    location: 'Chennai',
    rating: 5,
    review: 'The A2 Bilona Ghee is absolutely divine! You can taste the difference immediately - it\'s so pure and aromatic. My grandmother would be proud of this traditional quality.',
    product: 'A2 Bilona Ghee',
    verified: true
  },
  {
    id: '2',
    name: 'Rajesh M.',
    location: 'Bangalore',
    rating: 5,
    review: 'I\'ve been using the Himalayan Shilajit for 3 months now. My energy levels have improved significantly, and I feel more focused throughout the day. Highly recommend!',
    product: 'Pure Himalayan Shilajit',
    verified: true
  },
  {
    id: '3',
    name: 'Lakshmi S.',
    location: 'Hyderabad',
    rating: 5,
    review: 'As a diabetic, finding good natural sweeteners is challenging. This Stevia powder is perfect - no bitter aftertaste and works wonderfully in my morning coffee.',
    product: 'Natural Stevia Powder',
    verified: true
  },
  {
    id: '4',
    name: 'Arjun P.',
    location: 'Kochi',
    rating: 5,
    review: 'The quality of these products is exceptional. You can tell they follow traditional methods. The ghee especially reminds me of what my mother used to make.',
    product: 'A2 Bilona Ghee',
    verified: true
  },
  {
    id: '5',
    name: 'Meera R.',
    location: 'Coimbatore',
    rating: 5,
    review: 'Excellent packaging and fast delivery. The Shilajit is authentic - I can feel the difference in my stamina during workouts. Will definitely reorder.',
    product: 'Pure Himalayan Shilajit',
    verified: true
  },
  {
    id: '6',
    name: 'Suresh N.',
    location: 'Madurai',
    rating: 5,
    review: 'Finally found a trustworthy source for pure A2 ghee. The Bilona method really makes a difference. My family loves the rich taste and aroma.',
    product: 'A2 Bilona Ghee',
    verified: true
  },
  {
    id: '7',
    name: 'Kavitha L.',
    location: 'Trivandrum',
    rating: 5,
    review: 'The Stevia powder has helped me reduce sugar completely. It\'s so convenient and natural. Perfect for my weight management journey.',
    product: 'Natural Stevia Powder',
    verified: true
  },
  {
    id: '8',
    name: 'Venkat G.',
    location: 'Vijayawada',
    rating: 5,
    review: 'Outstanding quality! The Shilajit is pure and potent. I\'ve tried many brands, but this one stands out for its authenticity and effectiveness.',
    product: 'Pure Himalayan Shilajit',
    verified: true
  }
];
