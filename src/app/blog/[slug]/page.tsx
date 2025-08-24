import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const blogPosts = [
  {
    slug: 'the-perfect-brew',
    title: '5 Tips for the Perfect Home Brew',
    description: 'Unlock the secrets to brewing coffee that rivals your favorite cafe. From bean selection to brewing techniques, we cover it all.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'coffee brewing',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
  },
  {
    slug: 'productivity-hacks',
    title: 'Productivity Hacks for Remote Workers',
    description: 'Tired of distractions at home? Discover how to create a focused and productive workspace, fueled by the best coffee.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'remote work',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
  },
  {
    slug: 'latte-art-101',
    title: 'Latte Art 101: A Beginner\'s Guide',
    description: 'Impress your friends with your newfound barista skills. Our step-by-step guide makes creating beautiful latte art easy and fun.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'latte art',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <article>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-primary text-center mb-8">
              {post.title}
            </h1>
            <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint={post.hint}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
