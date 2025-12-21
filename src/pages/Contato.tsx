import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

export default function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);

      // Call backend API (works for both local proxy and Vercel production)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha ao enviar e-mail');
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: error instanceof Error ? error.message : "Ocorreu um erro inesperado. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = "5519982184360";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da JAMEK Solutions.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos prontos para ajudar com seu projeto de automação.
              Fale conosco e receba um atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Escolha a melhor forma de entrar em contato. Nossa equipe está
                pronta para atender suas necessidades e tirar todas as suas dúvidas.
              </p>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 mb-10 border border-green-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageCircle className="w-24 h-24 text-green-500" />
                </div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      WhatsApp Comercial
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Resposta rápida para dúvidas técnicas e orçamentos.
                    </p>
                    <Button
                      className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all"
                      onClick={handleWhatsApp}
                    >
                      Iniciar conversa
                      <MessageCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { icon: Mail, title: "E-mail", value: "contato@jamek.com.br", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: Phone, title: "Telefone", value: "(19) 9 8218-4360", color: "text-indigo-500", bg: "bg-indigo-500/10" },
                  { icon: Clock, title: "Horário", value: "Seg. a Sex: 08:00 - 18:00", color: "text-orange-500", bg: "bg-orange-500/10" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-sm group">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-0.5">{item.title}</h4>
                      <p className="text-muted-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border soft-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(19) 9 8218-4360"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}