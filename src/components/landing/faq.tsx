import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there parking available?",
    answer:
      "Yes! We have plenty of parking available in our dedicated lot, so you can focus on your work or relaxation without worrying about finding a spot.",
  },
  {
    question: "Do you have outdoor seating?",
    answer:
      "Absolutely. Our outdoor seating options include sidewalk seating on the street side for people-watching and a more private backyard space with a fireplace, multiple seats, and a breezy atmosphere.",
  },
  {
    question: "What's the seating like inside?",
    answer:
      "We have two floors of seating, including a unique loft coffee shop area on the second floor. It's a great spot for focused work or a quiet conversation.",
  },
  {
    question: "Do you offer Wi-Fi?",
    answer:
      "Of course! We provide free, high-speed Wi-Fi for all our guests. Just ask our staff for the password when you arrive.",
  },
  {
    question: "Is your cafe pet-friendly?",
    answer:
      "Yes, we welcome well-behaved pets in our outdoor seating areas. Please ensure your pet is on a leash and supervised at all times.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary text-center mb-16">
          Got Questions?
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
