import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    slug: "the-perfect-brew",
    title: "5 Tips for the Perfect Home Brew",
    description:
      "Unlock the secrets to brewing coffee that rivals your favorite cafe. From bean selection to brewing techniques, we cover it all.",
    image: "/img/blog-image-01.jpg",
    hint: "coffee brewing",
    content: `
      <p>Unlock the secrets to brewing coffee that rivals your favorite cafe. From bean selection to brewing techniques, we cover it all. This guide is designed to help both beginners and seasoned brewers enhance their coffee-making skills.</p>
      <p>Whether you're just starting out or looking to refine your technique, these tips will set you on the path to coffee excellence.</p>
      <p>By understanding the nuances of coffee brewing, you can tailor each cup to your personal taste, making every sip a unique experience.</p>
      <ul>
        <li>Tip 1: Choose high-quality beans.</li>
        <li>Tip 2: Use the right grind size.</li>
        <li>Tip 3: Maintain your equipment.</li>
        <li>Tip 4: Experiment with brewing times.</li>
        <li>Tip 5: Keep water temperature consistent.</li>
      </ul>

      <p>
        Following these tips will help you brew a cup of coffee that's not only delicious but also a true reflection of your personal taste and style.
      </p>
    `,
  },
  {
    slug: "productivity-hacks",
    title: "Productivity Hacks for Remote Workers",
    description:
      "Tired of distractions at home? Discover how to create a focused and productive workspace, fueled by the best coffee.",
    image: "/img/blog-image-02.jpg",
    hint: "remote work",
    content: `
      <p>Tired of distractions at home? Discover how to create a focused and productive workspace, fueled by the best coffee. We'll explore practical strategies to help you stay on track and make the most of your remote workday.</p>
      <p>Implementing these strategies can significantly boost your efficiency and work-life balance when working from home.</p>
      <p>Here are some practical tips to enhance your productivity while working remotely:</p>
      <ul>
        <li>Tip 1: Establish a dedicated workspace.</li>
        <li>Tip 2: Set clear boundaries with family or roommates.</li>
        <li>Tip 3: Use productivity tools and apps.</li>
        <li>Tip 4: Take regular breaks to avoid burnout.</li>
        <li>Tip 5: Stay connected with your team.</li>
      </ul>

      <p>
        Implementing these strategies can significantly boost your efficiency and work-life balance when working from home.
      </p>
    `,
  },
  {
    slug: "latte-art-101",
    title: "Latte Art 101: A Beginner's Guide",
    description:
      "Impress your friends with your newfound barista skills. Our step-by-step guide makes creating beautiful latte art easy and fun.",
    image: "/img/blog-image-03.jpg",
    hint: "latte art",
    content: `
      <p>Impress your friends with your newfound barista skills. Our step-by-step guide makes creating beautiful latte art easy and fun. Whether you're a complete beginner or looking to refine your technique, this guide has something for everyone.</p>
      <p>In this guide, we'll cover the basics of milk frothing, pouring techniques, and how to create classic designs like hearts and rosettas. With a little practice, you'll be crafting coffee shop-quality drinks at home.</p>
      <p>Stay tuned for more advanced techniques and tips to take your latte art to the next level.</p>
      <p>Remember, the key to great latte art is patience and practice. Don't be discouraged by initial attempts; every barista started somewhere!</p>
      <ul>
        <li>Tip 1: Use fresh, cold milk for the best froth.</li>
        <li>Tip 2: Practice your pouring technique with water before using milk.</li>
        <li>Tip 3: Keep your espresso shot consistent for a stable base.</li>
        <li>Tip 4: Clean your equipment regularly to avoid off-flavors.</li>
        <li>Tip 5: Watch tutorials and learn from experienced baristas.</li>
      </ul>
      <p>With these tips in hand, you're well on your way to becoming a home barista who can impress friends and family alike. Remember, every great barista started with the basics, so keep practicing and enjoy the journey!</p>
    `,
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
