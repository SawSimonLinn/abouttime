import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    src: "/img/07.jpg",
    alt: "A latte with intricate foam art",
    hint: "latte art",
  },
  {
    src: "/img/02.jpg",
    alt: "Friends laughing and drinking coffee in a modern cafe",
    hint: "friends coffee",
  },
  {
    src: "/img/03.jpg",
    alt: "A colorful display of gourmet donuts and pastries",
    hint: "gourmet pastries",
  },
  {
    src: "/img/04.jpg",
    alt: "A minimalist study nook with a laptop and coffee",
    hint: "study nook",
  },
  {
    src: "/img/05.jpg",
    alt: "A delicious looking pastry",
    hint: "delicious pastry",
  },
  {
    src: "/img/06.jpg",
    alt: "A cozy corner of the cafe",
    hint: "cozy corner",
  },
  {
    src: "/img/07.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
  {
    src: "/img/08.jpg",
    alt: "A group of people enjoying their time",
    hint: "people enjoying",
  },
  {
    src: "/img/09.jpg",
    alt: "A view of the cafe from outside",
    hint: "cafe exterior",
  },
  {
    src: "/img/010.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
  {
    src: "/img/011.jpg",
    alt: "A stylish corner of the cafe",
    hint: "stylish corner",
  },
];

const homePageGalleryImages = galleryImages.slice(0, 4);

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
          Insta-worthy Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homePageGalleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
