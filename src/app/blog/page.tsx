import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'the-perfect-brew',
    title: '5 Tips for the Perfect Home Brew',
    description: 'Unlock the secrets to brewing coffee that rivals your favorite cafe. From bean selection to brewing techniques, we cover it all.',
    image: 'https://placehold.co/600x400.png',
    hint: 'coffee brewing',
  },
  {
    slug: 'productivity-hacks',
    title: 'Productivity Hacks for Remote Workers',
    description: 'Tired of distractions at home? Discover how to create a focused and productive workspace, fueled by the best coffee.',
    image: 'https://placehold.co/600x400.png',
    hint: 'remote work',
  },
  {
    slug: 'latte-art-101',
    title: 'Latte Art 101: A Beginner\'s Guide',
    description: 'Impress your friends with your newfound barista skills. Our step-by-step guide makes creating beautiful latte art easy and fun.',
    image: 'https://placehold.co/600x400.png',
    hint: 'latte art',
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="blog" className="py-20 md:py-32">
          <div className="container mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
              From the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={post.image}
                          alt={post.title}
                          data-ai-hint={post.hint}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                      </div>
                    </CardContent>
                    <CardHeader className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{post.description}</p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
