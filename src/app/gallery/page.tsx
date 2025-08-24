"use client";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const galleryImages = [
  {
    src: "/img/01.jpg",
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
    alt: "A latte with intricate foam art",
    hint: "latte art",
  },
  {
    src: "/img/012.jpg",
    alt: "Friends laughing and drinking coffee in a modern cafe",
    hint: "friends coffee",
  },
  {
    src: "/img/013.jpg",
    alt: "A colorful display of gourmet donuts and pastries",
    hint: "gourmet pastries",
  },
  {
    src: "/img/014.jpg",
    alt: "A minimalist study nook with a laptop and coffee",
    hint: "study nook",
  },
  {
    src: "/img/015.jpg",
    alt: "A delicious looking pastry",
    hint: "delicious pastry",
  },
  {
    src: "/img/016.jpg",
    alt: "A cozy corner of the cafe",
    hint: "cozy corner",
  },
  {
    src: "/img/017.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
  {
    src: "/img/018.jpg",
    alt: "A group of people enjoying their time",
    hint: "people enjoying",
  },
  {
    src: "/img/019.jpg",
    alt: "A view of the cafe from outside",
    hint: "cafe exterior",
  },
  {
    src: "/img/020.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
  {
    src: "/img/021.jpg",
    alt: "A latte with intricate foam art",
    hint: "latte art",
  },
  {
    src: "/img/022.jpg",
    alt: "Friends laughing and drinking coffee in a modern cafe",
    hint: "friends coffee",
  },
  {
    src: "/img/023.jpg",
    alt: "A colorful display of gourmet donuts and pastries",
    hint: "gourmet pastries",
  },
  {
    src: "/img/024.jpg",
    alt: "A minimalist study nook with a laptop and coffee",
    hint: "study nook",
  },
  {
    src: "/img/025.jpg",
    alt: "A delicious looking pastry",
    hint: "delicious pastry",
  },
  {
    src: "/img/026.jpg",
    alt: "A cozy corner of the cafe",
    hint: "cozy corner",
  },
  {
    src: "/img/027.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
  {
    src: "/img/028.jpg",
    alt: "A group of people enjoying their time",
    hint: "people enjoying",
  },
  {
    src: "/img/029.jpg",
    alt: "A view of the cafe from outside",
    hint: "cafe exterior",
  },
  {
    src: "/img/030.jpg",
    alt: "A barista preparing a coffee",
    hint: "barista preparing",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="gallery" className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
              Insta-worthy Moments
            </h2>
            <Dialog>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <DialogTrigger key={index} asChild>
                    <Card
                      onClick={() => setSelectedImage(image)}
                      className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer"
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
                  </DialogTrigger>
                ))}
              </div>
              <DialogContent className="max-w-3xl p-0">
                <DialogTitle className="sr-only">
                  {selectedImage?.alt}
                </DialogTitle>
                {selectedImage && (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={900}
                    height={900}
                    className="object-contain w-full h-auto"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
