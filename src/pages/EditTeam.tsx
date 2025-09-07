import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    User,
    Mail,
    Phone,
    Users,
    Target,
    Plus,
    Trash2,
    Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

const EditTeam = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const isMobile = useIsMobile();

    const [formData, setFormData] = useState({
        teamName: "Selva Warriors",
        teamMembers: [
            {
                id: 1,
                name: "João Silva",
                email: "joao@email.com",
                phone: "(92) 99999-1111",
                experience: "intermediario"
            },
            {
                id: 2,
                name: "Maria Santos",
                email: "maria@email.com",
                phone: "(92) 99999-2222",
                experience: "basico"
            },
            {
                id: 3,
                name: "Pedro Costa",
                email: "pedro@email.com",
                phone: "(92) 99999-3333",
                experience: "avancado"
            },
            {
                id: 4,
                name: "Ana Oliveira",
                email: "ana@email.com",
                phone: "(92) 99999-4444",
                experience: "intermediario"
            }
        ]
    });

    const handleTeamNameChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            teamName: value
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
            const newMember = {
                id: Date.now(),
                name: "",
                email: "",
                phone: "",
                experience: ""
            };
            setFormData(prev => ({
                ...prev,
                teamMembers: [...prev.teamMembers, newMember]
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

    const handleSave = () => {
        // Validar dados
        const hasEmptyFields = formData.teamMembers.some(member =>
            !member.name || !member.email || !member.phone || !member.experience
        );

        if (!formData.teamName || hasEmptyFields) {
            toast({
                title: "Dados incompletos! ⚠️",
                description: "Preencha todos os dados da equipe para salvar.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Equipe atualizada com sucesso! 🏆",
            description: "Os dados da sua equipe foram salvos com sucesso!",
        });

        // Simular delay e redirecionar
        setTimeout(() => {
            navigate("/participant");
        }, 1500);
    };

    return (
        <Layout>
            <div className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-8">
                        <BackButton to="/participant" />
                        <h1 className="text-4xl font-black text-jungle-secondary mb-2">
                            EDITAR DADOS DA EQUIPE
                        </h1>
                        <p className="text-jungle-light/80 text-lg">
                            Atualize as informações da sua equipe! 🦁
                        </p>
                    </div>

                    <Card className="card-gradient border-jungle-primary/20 card-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                                <Users className="h-6 w-6" />
                                Dados da Equipe
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            {/* Team Name */}
                            <div className="space-y-2">
                                <Label htmlFor="teamName" className="text-jungle-secondary font-semibold">
                                    Nome da Equipe *
                                </Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                    <Input
                                        id="teamName"
                                        value={formData.teamName}
                                        onChange={(e) => handleTeamNameChange(e.target.value)}
                                        className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                        placeholder="Nome da sua equipe"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Team Members */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-jungle-secondary">
                                        Membros da Equipe ({formData.teamMembers.length}/4)
                                    </h3>
                                    {formData.teamMembers.length < 4 && (
                                        <Button
                                            type="button"
                                            variant="tactical"
                                            size={isMobile ? "sm" : "default"}
                                            onClick={addTeamMember}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            {isMobile ? "Adicionar" : "Adicionar Membro"}
                                        </Button>
                                    )}
                                </div>

                                <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                                    {formData.teamMembers.map((member, index) => (
                                        <Card key={member.id} className="bg-jungle-dark/20 border-jungle-primary/20">
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

                                                <div className="space-y-4">
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
                            </div>

                            {/* Save Button */}
                            <div className="flex gap-4 pt-4">
                                <Button
                                    variant="tactical"
                                    onClick={() => navigate("/participant")}
                                    className="flex-1"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="hero"
                                    onClick={handleSave}
                                    className="flex-1"
                                >
                                    <Save className="mr-2 h-4 w-4" />
                                    Salvar Alterações
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default EditTeam;
