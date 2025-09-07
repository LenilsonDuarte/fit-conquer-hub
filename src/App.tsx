import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TournamentSignUp from "./pages/TournamentSignUp";
import PaymentGym from "./pages/PaymentGym";
import PaymentTournament from "./pages/PaymentTournament";
import Participant from "./pages/Participant";
import EditTeam from "./pages/EditTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tournament-signup" element={<TournamentSignUp />} />
          <Route path="/payment-gym" element={<PaymentGym />} />
          <Route path="/payment-tournament" element={<PaymentTournament />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/edit-team" element={<EditTeam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
