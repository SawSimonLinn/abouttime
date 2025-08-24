import { Card, CardContent } from '@/components/ui/card';

const reels = [
  {
    src: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_30fps.mp4',
    alt: 'A person pouring milk into a coffee.',
    hint: 'coffee pour',
  },
  {
    src: 'https://videos.pexels.com/video-files/5985169/5985169-sd_640_360_25fps.mp4',
    alt: 'Close-up of a coffee machine brewing.',
    hint: 'coffee brewing',
  },
  {
    src: 'https://videos.pexels.com/video-files/4431525/4431525-sd_540_960_30fps.mp4',
    alt: 'A delicious-looking croissant on a plate.',
    hint: 'fresh croissant',
  },
];

export function ReelsSection() {
  return (
    <section id="reels" className="py-20 md:py-32">
      <div className="container mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
          Vibes on Film
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <Card
              key={index}
              className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[9/16]">
                  <video
                    src={reel.src}
                    data-ai-hint={reel.hint}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
