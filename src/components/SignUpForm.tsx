import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone, MapPin, Target, Calendar, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    experience: "",
    goals: "",
    medicalConditions: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      return;
    }

    // Redirecionar para a página de inscrição no torneio
    navigate("/tournament-signup");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-jungle-secondary">
              INSCREVA-SE NO TORNEIO!🔥
            </h2>
            <p className="text-xl text-jungle-light/80">
              INSCRIÇÃO INDIVIDUAL E EQUIPE!
            </p>
          </div>

          <Card className="card-gradient border-jungle-primary/20 card-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center justify-center gap-2">
                <Trophy className="h-6 w-6" />
                Inscrição no Torneio
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-jungle-secondary font-semibold">
                      Nome Completo *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                        placeholder="Seu nome de guerreiro"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-jungle-secondary font-semibold">
                      E-mail *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-jungle-secondary font-semibold">
                      Telefone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                        placeholder="(92) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="text-jungle-secondary font-semibold">
                      Data de Nascimento
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-jungle-secondary font-semibold">
                    Endereço
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                      placeholder="Rua, bairro, cidade"
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label className="text-jungle-secondary font-semibold">
                    Nível de Experiência
                  </Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light">
                      <Target className="h-4 w-4 text-jungle-secondary/60 mr-2" />
                      <SelectValue placeholder="Selecione seu nível" />
                    </SelectTrigger>
                    <SelectContent className="bg-jungle-dark border-jungle-primary/30">
                      <SelectItem value="iniciante">Iniciante (Nunca pratiquei)</SelectItem>
                      <SelectItem value="basico">Básico (Algumas vezes)</SelectItem>
                      <SelectItem value="intermediario">Intermediário (Pratico regularmente)</SelectItem>
                      <SelectItem value="avancado">Avançado (Muito experiente)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-jungle-secondary font-semibold">
                    Objetivos
                  </Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light min-h-[100px]"
                    placeholder="Conte-nos quais são seus objetivos de treino..."
                  />
                </div>

                {/* Medical Conditions */}
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions" className="text-jungle-secondary font-semibold">
                    Condições Médicas
                  </Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light min-h-[100px]"
                    placeholder="Informe se possui alguma condição médica especial ou lesão..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                      className="border-jungle-primary/30 data-[state=checked]:bg-jungle-secondary data-[state=checked]:border-jungle-secondary"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-jungle-light leading-relaxed">
                      Eu concordo com os <span className="text-jungle-secondary font-semibold cursor-pointer hover:underline">termos e condições</span> e
                      estou ciente de que a prática de exercícios físicos envolve riscos. *
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked)}
                      className="border-jungle-primary/30 data-[state=checked]:bg-jungle-secondary data-[state=checked]:border-jungle-secondary"
                    />
                    <label htmlFor="agreeMarketing" className="text-sm text-jungle-light leading-relaxed">
                      Aceito receber informações sobre treinos, torneios e promoções por e-mail e WhatsApp.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Inscrever-se no Torneio!
                </Button>

                <p className="text-center text-sm text-jungle-light/60">
                  🏆 Após a inscrição, você será redirecionado para o pagamento do torneio!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;