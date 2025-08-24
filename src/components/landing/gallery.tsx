import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1509353067293-61a1010c7867?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    alt: 'A latte with intricate foam art',
    hint: 'latte art',
  },
  {
    src: 'https://images.unsplash.com/photo-1601813913455-118810e79277?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    alt: 'Friends laughing and drinking coffee in a modern cafe',
    hint: 'friends coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1684569679252-e86d9fc31d36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    alt: 'A colorful display of gourmet donuts and pastries',
    hint: 'gourmet pastries',
  },
  {
    src: 'https://images.unsplash.com/photo-1737354098981-f5a79889a358?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    alt: 'A minimalist study nook with a laptop and coffee',
    hint: 'study nook',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqyYy6DvBXyw23ZFMLsd36DKbKxj5oFasCD1ncvUmClnz6jlrLj2eq60bTCj56AJ7uodI0rianSJtdugToYs-fCSl_4ZeGw0QZ0qD0nH5ktGU3X5aNcD4IKX1qpBsJk1kPESSnmHiir-9yP=w289-h312-n-k-no',
    alt: 'A delicious looking pastry',
    hint: 'delicious pastry'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvpJkALNhk429R_NNzCdLnErGxy0o7sMnIDq0b6-ZO1muLbYJTZYFxuYg8EjDq4elIXKc6IRNoOGvc3XSTg6Y_27w3ai-ILF2EIfRSxxpnMtXJ2lEVNr25pfIm1zzx0IpDt4hzxzHE7amT=s1360-w1360-h1020-rw',
    alt: 'A cozy corner of the cafe',
    hint: 'cozy corner'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npjxmvPwkP9JVC8SUQn0zUSI3eirVvDPDib2MbLJ2naZNR-E0Inuqbk_6y8DsfBU-hvzPZrxCJ64baFyva-nFfo3agB0jPMkImJd-em5kJDue3QM9SUxp4OSTgyTw_A8i6OlF_dRg=s1360-w1360-h1020-rw',
    alt: 'A group of people enjoying their time',
    hint: 'people enjoying'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwVMl7e_R97qNHck1Bi2ZLTn8Y4wjmnhKrU4WSGP3AAcnVkg7nUDSS8or4xCBjx3mT3lZvPWqV6q451LupprD7VzZxXtKHnNdsFMtmGd-87Vsexb-G9LfCHH8jLlFm3_2Bl518=s1360-w1360-h1020-rw',
    alt: 'A view of the cafe from outside',
    hint: 'cafe exterior'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPs9vC8YAeAtZYyVHufUNxuQZnUxmzd4DihNF3UMTlV2qeI0dTmRIL75Zllv3G0UoqRLMabRxfW98RsGuUnHf32BuUKdE7Z6VCufBnybMGmFN-QMJ1sf2zHshYZTJroIDSgRY=s1360-w1360-h1020-rw',
    alt: 'A barista preparing a coffee',
    hint: 'barista preparing'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_w_RPm-8n6oxq23RGZBy5Ins1OMh6E-LO-njl-XjgRDtOYIf4smXQ9rOwqFnoM_UHvGUsFfBb7hr1iYJ4vtHM9trcw8X8f_SpaQdufJUaVZkPB-9KFGFO-Gl8emKQ1BFNzZX6nx2ULf4=s1360-w1360-h1020-rw',
    alt: 'A stylish corner of the cafe',
    hint: 'stylish corner'
  }
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
