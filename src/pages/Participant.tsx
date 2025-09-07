import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    User,
    Users,
    Trophy,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Dumbbell,
    LogOut,
    Edit,
    CreditCard
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import Layout from "@/components/Layout";
import mascotImage from "@/assets/mascot.png";

const Participant = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const isMobile = useIsMobile();

    // Dados mockados da equipe
    const teamData = {
        teamName: "Selva Warriors",
        category: "Intermediário",
        registrationDate: "15/12/2024",
        status: "Confirmado",
        paymentStatus: "Pago",
        teamMembers: [
            {
                id: 1,
                name: "João Silva",
                email: "joao@email.com",
                phone: "(92) 99999-1111",
                role: "Líder da Equipe",
                experience: "Intermediário"
            },
            {
                id: 2,
                name: "Maria Santos",
                email: "maria@email.com",
                phone: "(92) 99999-2222",
                role: "Membro",
                experience: "Básico"
            },
            {
                id: 3,
                name: "Pedro Costa",
                email: "pedro@email.com",
                phone: "(92) 99999-3333",
                role: "Membro",
                experience: "Avançado"
            },
            {
                id: 4,
                name: "Ana Oliveira",
                email: "ana@email.com",
                phone: "(92) 99999-4444",
                role: "Membro",
                experience: "Intermediário"
            }
        ]
    };

    // Dados mockados do torneio
    const tournamentData = {
        name: "Ogro Challenge 2024",
        date: "25/01/2025",
        time: "08:00",
        location: "Cross Jungle Inside - Manaus/AM",
        address: "Av. Djalma Batista, 1000 - Chapada, Manaus - AM",
        price: "R$ 150,00 por pessoa",
        totalPrice: "R$ 600,00",
        description: "O maior desafio de CrossFit da Amazônia! Prepare-se para 4 WODs épicos que vão testar seus limites físicos e mentais.",
        rules: [
            "Equipes de 4 pessoas (2 homens e 2 mulheres)",
            "Idade mínima: 18 anos",
            "Atestado médico obrigatório",
            "Equipamentos fornecidos pela organização",
            "Premiação para os 3 primeiros lugares"
        ]
    };

    const handleLogout = () => {
        toast({
            title: "Logout realizado! 👋",
            description: "Obrigado por participar da Cross Jungle Inside!",
        });
        navigate("/");
    };

    const handleEditTeam = () => {
        navigate("/edit-team");
    };

    const handlePayment = () => {
        toast({
            title: "Pagamento! 💳",
            description: "Redirecionando para área de pagamentos...",
        });
        navigate("/payment-tournament");
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-jungle-secondary mb-2">
                        ÁREA DO PARTICIPANTE
                    </h1>
                    <p className="text-jungle-light/80 text-lg">
                        Bem-vindo à selva, guerreiro! 🦁
                    </p>
                </div>

                <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
                    {/* Team Information */}
                    <Card className="card-gradient border-jungle-primary/20 card-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                                <Users className="h-6 w-6" />
                                Dados da Equipe
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-jungle-light/60">Nome da Equipe</p>
                                    <p className="text-lg font-semibold text-jungle-secondary">{teamData.teamName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-jungle-light/60">Categoria</p>
                                    <Badge variant="secondary" className="bg-jungle-secondary/20 text-jungle-secondary">
                                        {teamData.category}
                                    </Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-jungle-light/60">Data de Inscrição</p>
                                    <p className="text-jungle-light">{teamData.registrationDate}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-jungle-light/60">Status</p>
                                    <Badge variant="default" className="bg-green-500/20 text-green-400">
                                        {teamData.status}
                                    </Badge>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-jungle-light/60">Status do Pagamento</p>
                                <Badge variant="default" className="bg-green-500/20 text-green-400">
                                    {teamData.paymentStatus}
                                </Badge>
                            </div>

                            <Button variant="tactical" onClick={handleEditTeam} className="w-full">
                                <Edit className="mr-2 h-4 w-4" />
                                Editar Dados da Equipe
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Tournament Information */}
                    <Card className="card-gradient border-jungle-primary/20 card-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                                <Trophy className="h-6 w-6" />
                                Dados do Torneio
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <p className="text-sm text-jungle-light/60">Nome do Torneio</p>
                                <p className="text-lg font-semibold text-jungle-secondary">{tournamentData.name}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-jungle-light/60">Data</p>
                                    <p className="text-jungle-light">{tournamentData.date}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-jungle-light/60">Horário</p>
                                    <p className="text-jungle-light">{tournamentData.time}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-jungle-light/60">Local</p>
                                <p className="text-jungle-light">{tournamentData.location}</p>
                                <p className="text-sm text-jungle-light/60">{tournamentData.address}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-jungle-light/60">Valor por Pessoa</p>
                                    <p className="text-jungle-secondary font-semibold">{tournamentData.price}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-jungle-light/60">Total da Equipe</p>
                                    <p className="text-jungle-secondary font-semibold">{tournamentData.totalPrice}</p>
                                </div>
                            </div>

                            <Button variant="hero" onClick={handlePayment} className="w-full">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Gerenciar Pagamento
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Team Members */}
                <Card className="card-gradient border-jungle-primary/20 card-shadow mt-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                            <User className="h-6 w-6" />
                            Membros da Equipe
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                            {teamData.teamMembers.map((member) => (
                                <div key={member.id} className="bg-jungle-dark/30 border border-jungle-primary/30 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-jungle-secondary">{member.name}</h3>
                                        <Badge variant="outline" className="border-jungle-primary/30 text-jungle-light">
                                            {member.role}
                                        </Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-jungle-secondary/60" />
                                            <span className="text-sm text-jungle-light">{member.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-jungle-secondary/60" />
                                            <span className="text-sm text-jungle-light">{member.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Dumbbell className="h-4 w-4 text-jungle-secondary/60" />
                                            <span className="text-sm text-jungle-light">Experiência: {member.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Tournament Description */}
                <Card className="card-gradient border-jungle-primary/20 card-shadow mt-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                            <Trophy className="h-6 w-6" />
                            Informações do Torneio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-jungle-secondary mb-2">Descrição</h3>
                            <p className="text-jungle-light">{tournamentData.description}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-jungle-secondary mb-3">Regras do Torneio</h3>
                            <ul className="space-y-2">
                                {tournamentData.rules.map((rule, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-jungle-secondary font-bold">•</span>
                                        <span className="text-jungle-light">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
};

export default Participant;