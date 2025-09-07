import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera, Heart, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gymImage from "@/assets/gym-interior.jpg";
import tournament1 from "@/assets/tournament-1.jpg";
import tournament2 from "@/assets/tournament-2.jpg";

const GalleryCarousel = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: gymImage,
      title: "Interior da Academia",
      description: "Nosso espaço completo com equipamentos de ponta para seu treino",
      category: "Academia",
      likes: 245
    },
    {
      id: 2,
      image: tournament1,
      title: "Ogro Challenge 2023",
      description: "Momentos épicos da competição que marcou história",
      category: "Torneio",
      likes: 389
    },
    {
      id: 3,
      image: tournament2,
      title: "Campeões da Jungle",
      description: "Celebração dos nossos guerreiros vitoriosos",
      category: "Torneio",
      likes: 512
    },
    {
      id: 4,
      image: gymImage,
      title: "Treino Matinal",
      description: "A energia que move nossos atletas todos os dias",
      category: "Academia",
      likes: 178
    },
    {
      id: 5,
      image: tournament1,
      title: "Warrior Competition",
      description: "Intensidade máxima em cada movimento",
      category: "Torneio",
      likes: 294
    },
    {
      id: 6,
      image: tournament2,
      title: "Time Cross Jungle",
      description: "Unidos somos mais fortes na selva do CrossFit",
      category: "Academia",
      likes: 423
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleLike = (itemTitle: string) => {
    toast({
      title: "Curtiu a foto!",
      description: `Você curtiu: ${itemTitle}`,
    });
  };

  const handleShare = (itemTitle: string) => {
    toast({
      title: "Compartilhado!",
      description: `${itemTitle} foi compartilhado nas suas redes`,
    });
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryItems.length;
      items.push(galleryItems[index]);
    }
    return items;
  };

  return (
    <section className="py-20 bg-jungle-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-jungle-secondary">
            GALERIA ÉPICA
          </h2>
          <p className="text-xl text-jungle-light/80 max-w-2xl mx-auto">
            Reviva os melhores momentos da nossa comunidade guerreira
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-jungle-primary/80 hover:bg-jungle-primary text-jungle-secondary p-3 rounded-full transition-all duration-300 hover:scale-110 glow-effect"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-jungle-primary/80 hover:bg-jungle-primary text-jungle-secondary p-3 rounded-full transition-all duration-300 hover:scale-110 glow-effect"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleItems().map((item, index) => (
              <div 
                key={`${item.id}-${currentIndex}`}
                className={`group relative overflow-hidden rounded-2xl card-shadow transition-all duration-500 hover:scale-105 ${
                  index === 1 ? 'md:scale-110 z-10' : 'md:scale-95'
                }`}
              >
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.category === 'Academia' 
                            ? 'bg-jungle-primary text-jungle-secondary' 
                            : 'bg-jungle-secondary text-jungle-dark'
                        }`}>
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-2 text-jungle-light">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-jungle-secondary mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-jungle-light/90 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="combat" 
                          size="sm"
                          onClick={() => handleLike(item.title)}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="tactical" 
                          size="sm"
                          onClick={() => handleShare(item.title)}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.category === 'Academia' 
                        ? 'bg-jungle-primary/80 text-jungle-secondary' 
                        : 'bg-jungle-secondary/80 text-jungle-dark'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-jungle-secondary glow-effect' 
                    : 'bg-jungle-primary/50 hover:bg-jungle-primary'
                }`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              <Camera className="mr-2 h-5 w-5" />
              Ver Galeria Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;