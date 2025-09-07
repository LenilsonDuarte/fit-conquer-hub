import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    CreditCard,
    Smartphone,
    Building2,
    CheckCircle,
    Dumbbell,
    Gift
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mascotImage from "@/assets/mascot.png";

const PaymentGym = () => {
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
            title: "Pagamento aprovado! 🎉",
            description: "Bem-vindo à Cross Jungle Inside! Sua matrícula foi confirmada!",
        });

        // Simular delay e redirecionar
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    const membershipPlans = [
        {
            name: "Plano Mensal",
            price: "R$ 150,00",
            description: "Acesso completo à academia",
            features: ["Acesso ilimitado", "Aulas em grupo", "Personal trainer", "Avaliação física"]
        },
        {
            name: "Plano Trimestral",
            price: "R$ 400,00",
            description: "3 meses de acesso",
            features: ["Acesso ilimitado", "Aulas em grupo", "Personal trainer", "Avaliação física", "Desconto de 10%"]
        },
        {
            name: "Plano Anual",
            price: "R$ 1.200,00",
            description: "12 meses de acesso",
            features: ["Acesso ilimitado", "Aulas em grupo", "Personal trainer", "Avaliação física", "Desconto de 20%", "Kit exclusivo"]
        }
    ];

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <img src={mascotImage} alt="Cross Jungle Inside" className="h-20 w-20 mx-auto mb-4 animate-glow" />
                    <h1 className="text-4xl font-black text-jungle-secondary mb-2">
                        PAGAMENTO DA MATRÍCULA
                    </h1>
                    <p className="text-jungle-light/80 text-lg">
                        Complete sua matrícula e comece sua jornada na selva! 🦁
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Membership Plans */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-jungle-secondary mb-4">
                            Escolha seu Plano
                        </h2>

                        {membershipPlans.map((plan, index) => (
                            <Card key={index} className="card-gradient border-jungle-primary/20 card-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-jungle-secondary">
                                        {plan.name}
                                    </CardTitle>
                                    <p className="text-3xl font-black text-jungle-secondary">
                                        {plan.price}
                                    </p>
                                    <p className="text-jungle-light/80">
                                        {plan.description}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-400" />
                                                <span className="text-jungle-light text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Free Trial Info */}
                        <Card className="bg-green-500/10 border-green-500/20">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Gift className="h-5 w-5 text-green-400" />
                                    <h3 className="text-lg font-semibold text-green-400">
                                        Aula Experimental Gratuita
                                    </h3>
                                </div>
                                <p className="text-green-300 text-sm">
                                    Você ganhou uma aula experimental gratuita por se cadastrar no site!
                                    Agende sua aula após confirmar o pagamento.
                                </p>
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
                                        Eu concordo com os <span className="text-jungle-secondary font-semibold cursor-pointer hover:underline">termos e condições</span> de pagamento e matrícula. *
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="xl"
                                    className="w-full"
                                >
                                    <Dumbbell className="mr-2 h-5 w-5" />
                                    Confirmar Pagamento e Matrícula!
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

export default PaymentGym;
