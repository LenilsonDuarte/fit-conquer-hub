import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import mascotImage from "@/assets/mascot.png";

const Login = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const isMobile = useIsMobile();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Credenciais mockadas
        const mockCredentials = {
            email: "teste@crossjungle.com",
            password: "123456"
        };

        if (formData.email === mockCredentials.email && formData.password === mockCredentials.password) {
            toast({
                title: "Login realizado com sucesso! 🏆",
                description: "Bem-vindo à selva do CrossFit! Redirecionando para sua área do participante...",
            });

            // Simular delay e redirecionar
            setTimeout(() => {
                navigate("/participant");
            }, 1500);
        } else {
            toast({
                title: "Credenciais inválidas! ⚠️",
                description: "Email ou senha incorretos. Tente novamente.",
                variant: "destructive",
            });
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-center py-12 px-4">
                <div className={`w-full ${isMobile ? "max-w-sm" : "max-w-md"}`}>
                    <BackButton to="/" />
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <img src={mascotImage} alt="Cross Jungle Inside" className="h-20 w-20 mx-auto mb-4 animate-glow" />
                        <h1 className="text-3xl font-black text-jungle-secondary">
                            CROSS JUNGLE INSIDE
                        </h1>
                        <p className="text-jungle-light/80 mt-2">Entre na selva do CrossFit!</p>
                    </div>

                    <Card className="card-gradient border-jungle-primary/20 card-shadow">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold text-jungle-secondary flex items-center justify-center gap-2">
                                <User className="h-6 w-6" />
                                Entrar
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-jungle-secondary font-semibold">
                                        E-mail
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
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
                                    <Label htmlFor="password" className="text-jungle-secondary font-semibold">
                                        Senha
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-jungle-secondary/60" />
                                        <Input
                                            id="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange("password", e.target.value)}
                                            className="pl-10 bg-jungle-dark/30 border-jungle-primary/30 text-jungle-light"
                                            placeholder="Sua senha"
                                            required
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="xl"
                                    className="w-full"
                                >
                                    <Dumbbell className="mr-2 h-5 w-5" />
                                    Entrar na Selva!
                                </Button>

                                <div className="text-center">
                                    <p className="text-sm text-jungle-light/60 mb-2">
                                        Não tem conta?
                                        <button
                                            type="button"
                                            onClick={() => navigate("/signup")}
                                            className="text-jungle-secondary font-semibold hover:underline ml-1"
                                        >
                                            Cadastre-se aqui
                                        </button>
                                    </p>

                                    <div className="bg-jungle-dark/30 border border-jungle-primary/30 rounded-lg p-3 mt-4">
                                        <p className="text-xs text-jungle-light/80 font-semibold mb-1">
                                            🔑 Credenciais de Teste:
                                        </p>
                                        <p className="text-xs text-jungle-secondary">
                                            Email: <span className="font-mono">teste@crossjungle.com</span>
                                        </p>
                                        <p className="text-xs text-jungle-secondary">
                                            Senha: <span className="font-mono">123456</span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default Login;