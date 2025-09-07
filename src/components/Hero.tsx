import { Button } from "@/components/ui/button";
import { Dumbbell, Trophy, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import mascotImage from "@/assets/mascot.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Mascot */}
          <div className="mb-18 animate-slide-up relative z-30">
            <img
              src={mascotImage}
              alt="Cross Jungle Inside Mascot"
              className="h-32 w-32 mx-auto animate-glow relative z-30"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-jungle-light animate-fade-in">
            CROSS JUNGLE
            <span className="block text-jungle-secondary">INSIDE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-jungle-light/90 font-semibold animate-fade-in">
            Desperte o guerreiro que existe em você!
            <span className="block mt-2 text-lg">
              🏋️‍♂️ Manaus - AM | A selva do CrossFit
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-up">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-jungle-secondary" />
              </div>
              <div className="text-2xl font-bold text-jungle-secondary">10K+</div>
              <div className="text-sm text-jungle-light/80">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Dumbbell className="h-8 w-8 text-jungle-secondary" />
              </div>
              <div className="text-2xl font-bold text-jungle-secondary">5+</div>
              <div className="text-sm text-jungle-light/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-8 w-8 text-jungle-secondary" />
              </div>
              <div className="text-2xl font-bold text-jungle-secondary">50+</div>
              <div className="text-sm text-jungle-light/80">Torneios Realizados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-jungle-secondary" />
              </div>
              <div className="text-2xl font-bold text-jungle-secondary">100%</div>
              <div className="text-sm text-jungle-light/80">Resultados</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              variant="hero"
              size="xl"
              onClick={handleLogin}
              className="min-w-[200px]"
            >
              <Dumbbell className="mr-2 h-5 w-5" />
              Entrar
            </Button>
            <Button
              variant="military"
              size="xl"
              onClick={handleSignUp}
              className="min-w-[200px]"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Inscreva-se no Site
            </Button>
          </div>

          {/* Info Text */}
          <p className="mt-8 text-jungle-light/70 animate-fade-in">
            🌿 Aula Experimental Gratuita | 📍 Localização disponível no perfil
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;