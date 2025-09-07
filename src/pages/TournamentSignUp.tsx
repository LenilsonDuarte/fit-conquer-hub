import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
    User,
    Users,
    Mail,
    Phone,
    Trophy,
    Target,
    Plus,
    Trash2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import mascotImage from "@/assets/mascot.png";

const TournamentSignUp = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const isMobile = useIsMobile();
    const [isTeamMode, setIsTeamMode] = useState(false);
    const [formData, setFormData] = useState({
        // Individual data
        name: "",
        email: "",
        phone: "",
        category: "",
        experience: "",
        agreeTerms: false,

        // Team data
        teamName: "",
        teamMembers: [
            { name: "", email: "", phone: "", experience: "" }
        ]
    });

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleTeamMemberChange = (index: number, field: string, value: string) => {
        const updatedMembers = [...formData.teamMembers];
        updatedMembers[index] = {
            ...updatedMembers[index],
            [field]: value
        };
        setFormData(prev => ({
            ...prev,
            teamMembers: updatedMembers
        }));
    };

    const addTeamMember = () => {
        if (formData.teamMembers.length < 4) {
            setFormData(prev => ({
                ...prev,
                teamMembers: [...prev.teamMembers, { name: "", email: "", phone: "", experience: "" }]
            }));
        }
    };

    const removeTeamMember = (index: number) => {
        if (formData.teamMembers.length > 1) {
            const updatedMembers = formData.teamMembers.filter((_, i) => i !== index);
            setFormData(prev => ({
                ...prev,
                teamMembers: updatedMembers
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.agreeTerms) {
            toast({
                title: "Termos obrigatórios! ⚠️",
                description: "Você deve aceitar os termos e condições para continuar.",
                variant: "destructive",
            });
            return;
        }

        if (isTeamMode) {
            // Validar dados da equipe
            const hasEmptyFields = formData.teamMembers.some(member =>
                !member.name || !member.email || !member.phone || !member.experience
            );

            if (!formData.teamName || hasEmptyFields) {
                toast({
                    title: "Dados incompletos! ⚠️",
                    description: "Preencha todos os dados da equipe para continuar.",
                    variant: "destructive",
                });
                return;
            }
        } else {
            // Validar dados individuais
            if (!formData.name || !formData.email || !formData.phone || !formData.category) {
                toast({
                    title: "Dados incompletos! ⚠️",
                    description: "Preencha todos os dados obrigatórios para continuar.",
                    variant: "destructive",
                });
                return;
            }
        }

        toast({
            title: "Inscrição no torneio realizada! 🏆",
            description: "Prepare-se para o desafio da selva! Redirecionando para o pagamento...",
        });

        // Simular delay e redirecionar para pagamento
        setTimeout(() => {
            navigate("/payment-tournament");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <img src={mascotImage} alt="Cross Jungle Inside" className="h-20 w-20 mx-auto mb-4 animate-glow" />
                    <h1 className="text-4xl font-black text-jungle-secondary mb-2">
                        INSCRIÇÃO NO TORNEIO
                    </h1>
                    <p className="text-jungle-light/80 text-lg">
                        Prepare-se para o Ogro Challenge 2024! 🔥
                    </p>
                </div>

                <Card className="card-gradient border-jungle-primary/20 card-shadow">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center justify-center gap-2">
                            <Trophy className="h-6 w-6" />
                            Inscrição no Torneio
                        </CardTitle>

                        {/* Switch Individual/Equipe */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <span className={`text-sm font-semibold ${!isTeamMode ? 'text-jungle-secondary' : 'text-jungle-light/60'}`}>
                                Individual
                            </span>
                            <Switch
                                checked={isTeamMode}
                                onCheckedChange={setIsTeamMode}
                                className="data-[state=checked]:bg-jungle-secondary"
                            />
                            <span className={`text-sm font-semibold ${isTeamMode ? 'text-jungle-secondary' : 'text-jungle-light/60'}`}>
                                Equipe
                            </span>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {isTeamMode ? (
                                // Team Mode
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="teamName" className="text-jungle-secondary font-semibold">
                                            Nome da Equipe *
                                        </Label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                            <Input
                                                id="teamName"
                                                value={formData.teamName}
                                                onChange={(e) => handleInputChange("teamName", e.target.value)}
                                                className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                placeholder="Nome da sua equipe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-jungle-secondary">
                                                Membros da Equipe ({formData.teamMembers.length}/4)
                                            </h3>
                                            {formData.teamMembers.length < 4 && (
                                                <Button
                                                    type="button"
                                                    variant="tactical"
                                                    size="sm"
                                                    onClick={addTeamMember}
                                                >
                                                    <Plus className="mr-2 h-4 w-4" />
                                                    Adicionar Membro
                                                </Button>
                                            )}
                                        </div>

                                        {formData.teamMembers.map((member, index) => (
                                            <Card key={index} className="bg-jungle-dark/20 border-jungle-primary/20">
                                                <CardContent className="p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-jungle-secondary font-semibold">
                                                            Membro {index + 1}
                                                        </h4>
                                                        {formData.teamMembers.length > 1 && (
                                                            <Button
                                                                type="button"
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => removeTeamMember(index)}
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label className="text-jungle-light/80 text-sm">Nome Completo *</Label>
                                                            <div className="relative">
                                                                <User className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                                                <Input
                                                                    value={member.name}
                                                                    onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                                                                    className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                                    placeholder="Nome do membro"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label className="text-jungle-light/80 text-sm">E-mail *</Label>
                                                            <div className="relative">
                                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                                                <Input
                                                                    type="email"
                                                                    value={member.email}
                                                                    onChange={(e) => handleTeamMemberChange(index, "email", e.target.value)}
                                                                    className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                                    placeholder="email@exemplo.com"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label className="text-jungle-light/80 text-sm">Telefone *</Label>
                                                            <div className="relative">
                                                                <Phone className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                                                <Input
                                                                    value={member.phone}
                                                                    onChange={(e) => handleTeamMemberChange(index, "phone", e.target.value)}
                                                                    className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                                    placeholder="(92) 99999-9999"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label className="text-jungle-light/80 text-sm">Experiência *</Label>
                                                            <Select
                                                                value={member.experience}
                                                                onValueChange={(value) => handleTeamMemberChange(index, "experience", value)}
                                                            >
                                                                <SelectTrigger className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light">
                                                                    <Target className="h-4 w-4 text-jungle-secondary/60 mr-2" />
                                                                    <SelectValue placeholder="Selecione" />
                                                                </SelectTrigger>
                                                                <SelectContent className="bg-jungle-dark border-jungle-primary/30">
                                                                    <SelectItem value="iniciante">Iniciante</SelectItem>
                                                                    <SelectItem value="basico">Básico</SelectItem>
                                                                    <SelectItem value="intermediario">Intermediário</SelectItem>
                                                                    <SelectItem value="avancado">Avançado</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                // Individual Mode
                                <>
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-jungle-secondary font-semibold">
                                                Categoria *
                                            </Label>
                                            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                                <SelectTrigger className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light">
                                                    <Trophy className="h-4 w-4 text-jungle-secondary/60 mr-2" />
                                                    <SelectValue placeholder="Selecione sua categoria" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-jungle-dark border-jungle-primary/30">
                                                    <SelectItem value="iniciante">Iniciante</SelectItem>
                                                    <SelectItem value="intermediario">Intermediário</SelectItem>
                                                    <SelectItem value="avancado">Avançado</SelectItem>
                                                    <SelectItem value="elite">Elite</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-jungle-secondary font-semibold">
                                                Experiência
                                            </Label>
                                            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                                                <SelectTrigger className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light">
                                                    <Target className="h-4 w-4 text-jungle-secondary/60 mr-2" />
                                                    <SelectValue placeholder="Selecione sua experiência" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-jungle-dark border-jungle-primary/30">
                                                    <SelectItem value="iniciante">Iniciante (0-1 ano)</SelectItem>
                                                    <SelectItem value="basico">Básico (1-3 anos)</SelectItem>
                                                    <SelectItem value="intermediario">Intermediário (3-5 anos)</SelectItem>
                                                    <SelectItem value="avancado">Avançado (5+ anos)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Terms */}
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                                    className="border-jungle-primary/30 data-[state=checked]:bg-jungle-secondary data-[state=checked]:border-jungle-secondary"
                                />
                                <label htmlFor="agreeTerms" className="text-sm text-jungle-light leading-relaxed">
                                    Eu concordo com os <span className="text-jungle-secondary font-semibold cursor-pointer hover:underline">termos e condições</span> do torneio e
                                    estou ciente de que a prática de exercícios físicos envolve riscos. *
                                </label>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="hero"
                                size="xl"
                                className="w-full"
                            >
                                <Trophy className="mr-2 h-5 w-5" />
                                {isTeamMode ? 'Inscrever Equipe no Torneio!' : 'Inscrever-se no Torneio!'}
                            </Button>

                            <div className="text-center">
                                <p className="text-sm text-jungle-light/60">
                                    🏆 Após a inscrição, você será redirecionado para o pagamento do torneio!
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TournamentSignUp;
