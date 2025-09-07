import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    CreditCard,
    Smartphone,
    Building2,
    Trophy,
    Users,
    Calendar,
    MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mascotImage from "@/assets/mascot.png";

const PaymentTournament = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [formData, setFormData] = useState({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        pixKey: "",
        agreeTerms: false,
    });

    // Dados mockados do torneio
    const tournamentData = {
        name: "Ogro Challenge 2024",
        date: "25/01/2025",
        time: "08:00",
        location: "Cross Jungle Inside - Manaus/AM",
        pricePerPerson: 150,
        teamSize: 4,
        totalPrice: 600,
        teamName: "Selva Warriors"
    };

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!paymentMethod) {
            toast({
                title: "Método de pagamento obrigatório! ⚠️",
                description: "Selecione uma forma de pagamento para continuar.",
                variant: "destructive",
            });
            return;
        }

        if (!formData.agreeTerms) {
            toast({
                title: "Termos obrigatórios! ⚠️",
                description: "Você deve aceitar os termos e condições para continuar.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Pagamento aprovado! 🏆",
            description: "Sua inscrição no torneio foi confirmada! Prepare-se para o desafio da selva!",
        });

        // Simular delay e redirecionar
        setTimeout(() => {
            navigate("/participant");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <img src={mascotImage} alt="Cross Jungle Inside" className="h-20 w-20 mx-auto mb-4 animate-glow" />
                    <h1 className="text-4xl font-black text-jungle-secondary mb-2">
                        PAGAMENTO DO TORNEIO
                    </h1>
                    <p className="text-jungle-light/80 text-lg">
                        Complete sua inscrição no Ogro Challenge 2024! 🔥
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Tournament Info */}
                    <div className="space-y-6">
                        <Card className="card-gradient border-jungle-primary/20 card-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                                    <Trophy className="h-6 w-6" />
                                    Detalhes do Torneio
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-jungle-secondary mb-2">
                                        {tournamentData.name}
                                    </h3>
                                    <p className="text-jungle-light/80">
                                        O maior desafio de CrossFit da Amazônia! Prepare-se para 4 WODs épicos que vão testar seus limites físicos e mentais.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-jungle-secondary" />
                                        <div>
                                            <p className="text-sm text-jungle-light/60">Data e Horário</p>
                                            <p className="text-jungle-light font-semibold">
                                                {tournamentData.date} às {tournamentData.time}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-5 w-5 text-jungle-secondary" />
                                        <div>
                                            <p className="text-sm text-jungle-light/60">Local</p>
                                            <p className="text-jungle-light font-semibold">
                                                {tournamentData.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5 text-jungle-secondary" />
                                        <div>
                                            <p className="text-sm text-jungle-light/60">Equipe</p>
                                            <p className="text-jungle-light font-semibold">
                                                {tournamentData.teamName} ({tournamentData.teamSize} membros)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pricing */}
                        <Card className="card-gradient border-jungle-primary/20 card-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-jungle-secondary">
                                    Resumo do Pagamento
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-jungle-light">Valor por pessoa</span>
                                    <span className="text-jungle-light">R$ {tournamentData.pricePerPerson},00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-jungle-light">Quantidade de membros</span>
                                    <span className="text-jungle-light">{tournamentData.teamSize}</span>
                                </div>
                                <div className="border-t border-jungle-primary/30 pt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-jungle-secondary">Total</span>
                                        <span className="text-2xl font-black text-jungle-secondary">
                                            R$ {tournamentData.totalPrice},00
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tournament Rules */}
                        <Card className="bg-jungle-dark/30 border-jungle-primary/20">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold text-jungle-secondary">
                                    Regras do Torneio
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-jungle-light">
                                    <li>• Equipes de 4 pessoas (2 homens e 2 mulheres)</li>
                                    <li>• Idade mínima: 18 anos</li>
                                    <li>• Atestado médico obrigatório</li>
                                    <li>• Equipamentos fornecidos pela organização</li>
                                    <li>• Premiação para os 3 primeiros lugares</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Payment Form */}
                    <Card className="card-gradient border-jungle-primary/20 card-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center gap-2">
                                <CreditCard className="h-6 w-6" />
                                Dados do Pagamento
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Payment Method Selection */}
                                <div className="space-y-4">
                                    <Label className="text-jungle-secondary font-semibold">
                                        Forma de Pagamento *
                                    </Label>

                                    <div className="grid grid-cols-1 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("credit")}
                                            className={`p-4 border rounded-lg flex items-center gap-3 transition-colors ${paymentMethod === "credit"
                                                ? "border-jungle-secondary bg-jungle-secondary/10"
                                                : "border-jungle-primary/30 hover:border-jungle-primary/50"
                                                }`}
                                        >
                                            <CreditCard className="h-5 w-5 text-jungle-secondary" />
                                            <span className="text-jungle-light">Cartão de Crédito</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("pix")}
                                            className={`p-4 border rounded-lg flex items-center gap-3 transition-colors ${paymentMethod === "pix"
                                                ? "border-jungle-secondary bg-jungle-secondary/10"
                                                : "border-jungle-primary/30 hover:border-jungle-primary/50"
                                                }`}
                                        >
                                            <Smartphone className="h-5 w-5 text-jungle-secondary" />
                                            <span className="text-jungle-light">PIX</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("bank")}
                                            className={`p-4 border rounded-lg flex items-center gap-3 transition-colors ${paymentMethod === "bank"
                                                ? "border-jungle-secondary bg-jungle-secondary/10"
                                                : "border-jungle-primary/30 hover:border-jungle-primary/50"
                                                }`}
                                        >
                                            <Building2 className="h-5 w-5 text-jungle-secondary" />
                                            <span className="text-jungle-light">Boleto Bancário</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Credit Card Fields */}
                                {paymentMethod === "credit" && (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="cardNumber" className="text-jungle-secondary font-semibold">
                                                Número do Cartão *
                                            </Label>
                                            <Input
                                                id="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                                                className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="cardName" className="text-jungle-secondary font-semibold">
                                                Nome no Cartão *
                                            </Label>
                                            <Input
                                                id="cardName"
                                                value={formData.cardName}
                                                onChange={(e) => handleInputChange("cardName", e.target.value)}
                                                className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                placeholder="Nome como está no cartão"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="expiryDate" className="text-jungle-secondary font-semibold">
                                                    Validade *
                                                </Label>
                                                <Input
                                                    id="expiryDate"
                                                    value={formData.expiryDate}
                                                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                                                    className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                    placeholder="MM/AA"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="cvv" className="text-jungle-secondary font-semibold">
                                                    CVV *
                                                </Label>
                                                <Input
                                                    id="cvv"
                                                    value={formData.cvv}
                                                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                                                    className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                                    placeholder="123"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* PIX Fields */}
                                {paymentMethod === "pix" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="pixKey" className="text-jungle-secondary font-semibold">
                                            Chave PIX *
                                        </Label>
                                        <Input
                                            id="pixKey"
                                            value={formData.pixKey}
                                            onChange={(e) => handleInputChange("pixKey", e.target.value)}
                                            className="bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                            placeholder="CPF, e-mail ou telefone"
                                            required
                                        />
                                    </div>
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
                                        Eu concordo com os <span className="text-jungle-secondary font-semibold cursor-pointer hover:underline">termos e condições</span> do torneio e pagamento. *
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
                                    Confirmar Pagamento do Torneio!
                                </Button>

                                <div className="text-center">
                                    <p className="text-sm text-jungle-light/60">
                                        🔒 Seus dados estão protegidos com criptografia SSL
                                    </p>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PaymentTournament;
