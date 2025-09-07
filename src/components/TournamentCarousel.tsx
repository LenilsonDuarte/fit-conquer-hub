import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Trophy, Calendar, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TournamentCarousel = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const tournaments = [
    {
      id: 1,
      name: "Ogro Challenge 2024",
      date: "15 de Dezembro, 2024",
      category: "Open Division",
      participants: 150,
      prize: "R$ 5.000",
      description: "O maior desafio da selva amazônica. Prove que você é o mais forte da jungle!",
      status: "Inscrições Abertas",
      image: "🏆"
    },
    {
      id: 2,
      name: "Jungle Warrior Cup",
      date: "28 de Janeiro, 2025",
      category: "RX/Scaled",
      participants: 200,
      prize: "R$ 8.000",
      description: "Competição épica para verdadeiros guerreiros. Venha mostrar sua força!",
      status: "Em Breve",
      image: "⚔️"
    },
    {
      id: 3,
      name: "Amazon Strength Series",
      date: "20 de Março, 2025",
      category: "Team Division",
      participants: 100,
      prize: "R$ 10.000",
      description: "Competição em equipe. Una forças com seus companheiros de treino!",
      status: "Planejamento",
      image: "🌿"
    },
    {
      id: 4,
      name: "Elite Combat Championship",
      date: "15 de Maio, 2025",
      category: "Elite Only",
      participants: 50,
      prize: "R$ 15.000",
      description: "Apenas para os melhores atletas. O torneio mais desafiador da região!",
      status: "Planejamento",
      image: "💀"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === tournaments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? tournaments.length - 1 : prevIndex - 1
    );
  };

  const handleSignUp = (tournamentName: string) => {
    toast({
      title: `Inscrição no ${tournamentName}`,
      description: "Formulário de inscrição será aberto em breve!",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-jungle-secondary">
            TORNEIOS ÉPICOS
          </h2>
          <p className="text-xl text-jungle-light/80 max-w-2xl mx-auto">
            Desafie seus limites nos torneios mais intensos da Amazônia
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-jungle-primary/80 hover:bg-jungle-primary text-jungle-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-jungle-primary/80 hover:bg-jungle-primary text-jungle-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Tournament Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="w-full flex-shrink-0 px-4">
                  <Card className="card-gradient border-jungle-primary/20 card-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4">{tournament.image}</div>
                      <CardTitle className="text-2xl font-bold text-jungle-secondary">
                        {tournament.name}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-2 text-jungle-light/80">
                        <Calendar className="h-4 w-4" />
                        <span>{tournament.date}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-center text-jungle-light/90">
                        {tournament.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <Target className="h-6 w-6 text-jungle-secondary mx-auto mb-1" />
                          <div className="text-sm font-semibold text-jungle-secondary">
                            {tournament.category}
                          </div>
                        </div>
                        <div className="text-center">
                          <Users className="h-6 w-6 text-jungle-secondary mx-auto mb-1" />
                          <div className="text-sm font-semibold text-jungle-secondary">
                            {tournament.participants} atletas
                          </div>
                        </div>
                        <div className="text-center">
                          <Trophy className="h-6 w-6 text-jungle-secondary mx-auto mb-1" />
                          <div className="text-sm font-semibold text-jungle-secondary">
                            {tournament.prize}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            tournament.status === 'Inscrições Abertas' 
                              ? 'bg-jungle-secondary text-jungle-dark' 
                              : 'bg-jungle-primary text-jungle-secondary'
                          }`}>
                            {tournament.status}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-4">
                        <Button 
                          variant={tournament.status === 'Inscrições Abertas' ? 'hero' : 'tactical'}
                          size="lg"
                          onClick={() => handleSignUp(tournament.name)}
                          disabled={tournament.status === 'Planejamento'}
                        >
                          <Trophy className="mr-2 h-5 w-5" />
                          {tournament.status === 'Inscrições Abertas' ? 'Inscrever-se Agora' : 
                           tournament.status === 'Em Breve' ? 'Notificar quando abrir' : 'Em Planejamento'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {tournaments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-jungle-secondary' 
                    : 'bg-jungle-primary/50 hover:bg-jungle-primary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentCarousel;