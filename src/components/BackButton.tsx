import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    to?: string;
    className?: string;
}

const BackButton = ({ to, className = "" }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
    };

    return (
        <Button
            variant="tactical"
            size="sm"
            onClick={handleBack}
            className={`mb-4 ${className}`}
        >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
        </Button>
    );
};

export default BackButton;
