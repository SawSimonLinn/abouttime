import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuCarousel } from "./menu-carousel";

const menuItems = {
  coffee: [
    {
      name: "Espresso",
      description: "The OG shot. Bold, intense, and gets the job done.",
    },
    {
      name: "Iced Latte",
      description:
        "Espresso on the rocks with your choice of milk. A classic for a reason.",
    },
    {
      name: "Cold Brew",
      description:
        "Steeped for 12 hours for a super smooth, low-acid coffee kick.",
    },
    {
      name: "Matcha Latte",
      description:
        "Ceremonial grade matcha with steamed milk. Green and serene.",
    },
  ],
  snacks: [
    {
      name: "Spicy Avocado Toast",
      description:
        "Smashed avo on sourdough with chili flakes and sea salt. Iconic.",
    },
    {
      name: "Gourmet Brownie",
      description: "Fudgy, chocolatey goodness. You deserve it.",
    },
    {
      name: "Energy Bites",
      description:
        "Oats, dates, and nuts. Perfect for that pre-meeting power-up.",
    },
  ],
  meals: [
    {
      name: "Crispy Chicken Wrap",
      description: "With slaw and a spicy aioli that hits different.",
    },
    {
      name: "Power Bowl",
      description:
        "Quinoa, roasted veggies, and a lemon-tahini drizzle. #health",
    },
    {
      name: "Breakfast Burrito",
      description:
        "Eggs, cheese, tater tots, and pico. Available all day, obviously.",
    },
  ],
};

export function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-20">
      <MenuCarousel />
      <div className="container mx-auto text-center mt-10">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-16">
          Our Menu
        </h2>
        <Tabs defaultValue="coffee" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-secondary p-1 h-auto">
            <TabsTrigger value="coffee" className="py-2.5">
              Drinks
            </TabsTrigger>
            <TabsTrigger value="snacks" className="py-2.5">
              Snacks
            </TabsTrigger>
            <TabsTrigger value="meals" className="py-2.5">
              Eats
            </TabsTrigger>
          </TabsList>
          <TabsContent value="coffee">
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {menuItems.coffee.map((item) => (
                <Card
                  key={item.name}
                  className="text-left bg-secondary border-2 border-transparent hover:border-accent transition-colors duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="snacks">
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {menuItems.snacks.map((item) => (
                <Card
                  key={item.name}
                  className="text-left bg-secondary border-2 border-transparent hover:border-accent transition-colors duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="meals">
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {menuItems.meals.map((item) => (
                <Card
                  key={item.name}
                  className="text-left bg-secondary border-2 border-transparent hover:border-accent transition-colors duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
