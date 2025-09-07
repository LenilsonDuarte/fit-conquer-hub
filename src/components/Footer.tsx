import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Clock, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mascotImage from "@/assets/mascot.png";

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform: string) => {
    toast({
      title: `Abrindo ${platform}`,
      description: "Redirecionando para nossa rede social...",
    });
  };

  const handleContactClick = (method: string) => {
    toast({
      title: `Contato via ${method}`,
      description: "Abrindo aplicativo de contato...",
    });
  };

  return (
    <footer className="bg-jungle-dark border-t border-jungle-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={mascotImage} alt="Cross Jungle Inside" className="h-12 w-12 animate-glow" />
              <div>
                <h3 className="text-xl font-bold text-jungle-secondary">
                  Cross Jungle Inside
                </h3>
                <p className="text-sm text-jungle-light/60">
                  A selva do CrossFit
                </p>
              </div>
            </div>
            <p className="text-jungle-light/80 text-sm leading-relaxed">
              Desperte o guerreiro que existe em você. Venha fazer parte da nossa tribo e 
              conquiste seus objetivos na selva do CrossFit.
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="combat" 
                size="sm"
                onClick={() => handleSocialClick("Instagram")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-jungle-secondary">Contato</h4>
            <div className="space-y-3">
              <button
                onClick={() => handleContactClick("WhatsApp")}
                className="flex items-center space-x-3 text-jungle-light hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(92) 99999-9999</span>
              </button>
              
              <button
                onClick={() => handleContactClick("E-mail")}
                className="flex items-center space-x-3 text-jungle-light hover:text-jungle-secondary transition-colors w-full text-left"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@crossjungleinside.com.br</span>
              </button>
              
              <div className="flex items-start space-x-3 text-jungle-light">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div className="text-sm">
                  <p>Manaus - AM</p>
                  <p className="text-jungle-light/60">Localização detalhada no Instagram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-jungle-secondary">Horários</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-jungle-secondary mt-0.5" />
                <div className="text-sm text-jungle-light">
                  <div className="space-y-1">
                    <p className="font-semibold">Segunda à Sexta</p>
                    <p className="text-jungle-light/80">05:30 - 22:00</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-jungle-secondary mt-0.5" />
                <div className="text-sm text-jungle-light">
                  <div className="space-y-1">
                    <p className="font-semibold">Sábado</p>
                    <p className="text-jungle-light/80">07:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-jungle-secondary mt-0.5" />
                <div className="text-sm text-jungle-light">
                  <div className="space-y-1">
                    <p className="font-semibold">Domingo</p>
                    <p className="text-jungle-light/80">08:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-jungle-secondary">Ações Rápidas</h4>
            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full"
                onClick={() => toast({
                  title: "Aula experimental",
                  description: "Redirecionando para agendamento..."
                })}
              >
                <Dumbbell className="mr-2 h-4 w-4" />
                Aula Grátis
              </Button>
              
              <Button 
                variant="military" 
                size="sm" 
                className="w-full"
                onClick={() => toast({
                  title: "Planos e valores",
                  description: "Carregando informações..."
                })}
              >
                Ver Planos
              </Button>
              
              <Button 
                variant="tactical" 
                size="sm" 
                className="w-full"
                onClick={() => toast({
                  title: "Localização",
                  description: "Abrindo Google Maps..."
                })}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Como Chegar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-jungle-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-jungle-light/60">
              © 2024 Cross Jungle Inside. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => toast({ title: "Política de Privacidade", description: "Carregando documento..." })}
                className="text-jungle-light/60 hover:text-jungle-secondary transition-colors"
              >
                Privacidade
              </button>
              <button 
                onClick={() => toast({ title: "Termos de Uso", description: "Carregando documento..." })}
                className="text-jungle-light/60 hover:text-jungle-secondary transition-colors"
              >
                Termos
              </button>
              <div className="text-jungle-light/60">
                🌿 Manaus - AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;