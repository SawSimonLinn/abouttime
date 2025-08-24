"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const menuImages = [
  {
    src: "/image/01.jpg",
    alt: "Delicious coffee",
    hint: "coffee cup",
  },
  {
    src: "/image/02.jpg",
    alt: "Fresh pastry",
    hint: "fresh pastry",
  },
  {
    src: "/image/03.jpg",
    alt: "Healthy salad",
    hint: "healthy salad",
  },
  {
    src: "/image/04.jpg",
    alt: "Gourmet sandwich",
    hint: "gourmet sandwich",
  },
  {
    src: "/image/05.jpg",
    alt: "Iced tea",
    hint: "iced tea",
  },
  {
    src: "/image/06.jpg",
    alt: "Artisanal bread",
    hint: "artisanal bread",
  },
  {
    src: "/image/07.jpg",
    alt: "Latte art",
    hint: "latte art",
  },
  {
    src: "/image/08.jpg",
    alt: "Breakfast platter",
    hint: "breakfast platter",
  },
  {
    src: "/image/09.jpg",
    alt: "Cupcake selection",
    hint: "cupcake selection",
  },
  {
    src: "/image/10.jpg",
    alt: "Avocado toast",
    hint: "avocado toast",
  },
  {
    src: "/image/11.jpg",
    alt: "Espresso shot",
    hint: "espresso shot",
  },
  {
    src: "/image/12.jpg",
    alt: "Fruit smoothie",
    hint: "fruit smoothie",
  },
  {
    src: "/image/13.jpg",
    alt: "Stack of pancakes",
    hint: "stack pancakes",
  },
  {
    src: "/image/14.jpg",
    alt: "Savory croissant",
    hint: "savory croissant",
  },
  {
    src: "/image/15.jpg",
    alt: "Bowl of soup",
    hint: "bowl soup",
  },
  {
    src: "/image/16.jpg",
    alt: "Macarons",
    hint: "colorful macarons",
  },
  {
    src: "/image/17.jpg",
    alt: "Cheese board",
    hint: "cheese board",
  },
  {
    src: "/image/18.jpg",
    alt: "Fresh juice",
    hint: "fresh juice",
  },
  {
    src: "/image/19.jpg",
    alt: "Muffin",
    hint: "blueberry muffin",
  },
  {
    src: "/image/20.jpg",
    alt: "Waffles",
    hint: "waffles syrup",
  },
  {
    src: "/image/21.jpg",
    alt: "New Dish",
    hint: "new dish",
  },
  {
    src: "/image/22.jpg",
    alt: "Dessert Plate",
    hint: "dessert plate",
  },
  {
    src: "/image/23.jpg",
    alt: "Coffee Beans",
    hint: "coffee beans",
  },
  {
    src: "/image/24.jpg",
    alt: "Muffin",
    hint: "blueberry muffin",
  },
  {
    src: "/image/25.jpg",
    alt: "Waffles",
    hint: "waffles syrup",
  },
  {
    src: "/image/26.jpg",
    alt: "New Dish",
    hint: "new dish",
  },
  {
    src: "/image/27.jpg",
    alt: "Dessert Plate",
    hint: "dessert plate",
  },
  {
    src: "/image/28.jpg",
    alt: "Coffee Beans",
    hint: "coffee beans",
  },
  {
    src: "/image/29.jpg",
    alt: "New Dish",
    hint: "new dish",
  },
  {
    src: "/image/30.jpg",
    alt: "Dessert Plate",
    hint: "dessert plate",
  },
  {
    src: "/image/31.jpg",
    alt: "Dessert Plate",
    hint: "dessert plate",
  },
];

export function MenuCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="container mx-auto pb-16">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="-ml-1">
          {menuImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
