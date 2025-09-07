import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell, Trophy, Camera, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mascotImage from "@/assets/mascot.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleNavClick = (section: string) => {
    toast({
      title: `Navegando para ${section}`,
      description: "Seção em desenvolvimento",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-jungle-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={mascotImage} alt="Cross Jungle Inside" className="h-10 w-10 animate-glow" />
            <h1 className="text-xl font-bold text-jungle-secondary">
              Cross Jungle Inside
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("Academia")}
              className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors"
            >
              <Dumbbell className="h-4 w-4" />
              <span>Academia</span>
            </button>
            <button 
              onClick={() => handleNavClick("Torneios")}
              className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors"
            >
              <Trophy className="h-4 w-4" />
              <span>Torneios</span>
            </button>
            <button 
              onClick={() => handleNavClick("Galeria")}
              className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors"
            >
              <Camera className="h-4 w-4" />
              <span>Galeria</span>
            </button>
            <button 
              onClick={() => handleNavClick("Sobre")}
              className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Sobre</span>
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="tactical" size="sm">
              Cadastre-se
            </Button>
            <Button variant="hero" size="sm">
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-jungle-secondary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-jungle-primary/20 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => handleNavClick("Academia")}
                className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Dumbbell className="h-4 w-4" />
                <span>Academia</span>
              </button>
              <button 
                onClick={() => handleNavClick("Torneios")}
                className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Trophy className="h-4 w-4" />
                <span>Torneios</span>
              </button>
              <button 
                onClick={() => handleNavClick("Galeria")}
                className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Camera className="h-4 w-4" />
                <span>Galeria</span>
              </button>
              <button 
                onClick={() => handleNavClick("Sobre")}
                className="flex items-center space-x-2 text-foreground hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Users className="h-4 w-4" />
                <span>Sobre</span>
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="tactical" size="sm" className="w-full">
                  Cadastre-se
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Inscreva-se
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;