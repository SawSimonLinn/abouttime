import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Sarah L.',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    rating: 5,
    review: "The absolute best place to get work done. The coffee is top-notch, the Wi-Fi is fast, and the vibe is immaculate. Highly recommend!",
  },
  {
    name: 'Mike D.',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    rating: 5,
    review: "I'm here almost every day. The staff is super friendly, and the spicy avocado toast is a game-changer. A true gem in the neighborhood.",
  },
  {
    name: 'Jessica P.',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'person portrait',
    rating: 5,
    review: "Found my new favorite study spot! It's quiet, has tons of outlets, and the matcha latte is divine. Plus, the decor is so Insta-worthy.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
          What the Locals Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-background shadow-lg border-2 border-transparent hover:border-accent transition-colors duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.hint} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-0.5 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
