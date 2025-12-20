import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Monitor, 
  Lock,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Dashboard Personalizado",
    description: "Cada cliente possui seu próprio painel de controle com visualização exclusiva dos seus equipamentos e dados.",
  },
  {
    icon: Shield,
    title: "Acesso Seguro",
    description: "Sistema de autenticação robusto com credenciais exclusivas e criptografia de ponta a ponta.",
  },
  {
    icon: Globe,
    title: "Acesso Remoto",
    description: "Monitore suas operações de qualquer lugar, a qualquer momento, via web ou aplicativo.",
  },
  {
    icon: Users,
    title: "Multi-usuários",
    description: "Crie perfis de acesso para diferentes membros da sua equipe com permissões personalizadas.",
  },
];

const accessInfo = [
  "Dashboard exclusivo com dados em tempo real",
  "Histórico completo de operações",
  "Relatórios personalizados",
  "Alertas e notificações configuráveis",
  "Suporte técnico dedicado",
];

export default function Cliente() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Portal do Cliente
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Área do Cliente
            </h1>
            <p className="text-lg text-muted-foreground">
              Acesse sua plataforma de monitoramento exclusiva com dados em tempo real 
              dos seus equipamentos e sistemas automatizados.
            </p>
          </div>
        </div>
      </section>

      {/* Access Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Como funciona o acesso?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos clientes têm acesso exclusivo a uma plataforma de monitoramento 
                personalizada, onde podem acompanhar em tempo real todos os equipamentos 
                e sistemas implementados pela JAMEK Solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                O acesso é feito através de credenciais únicas, fornecidas após a 
                implementação do projeto. Cada cliente possui seu próprio ambiente 
                isolado, garantindo a segurança e privacidade dos dados.
              </p>
              <ul className="space-y-3">
                {accessInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full industrial-gradient flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Acesso à Plataforma
                </h3>
                <p className="text-muted-foreground text-sm">
                  O portal do cliente está em desenvolvimento e será disponibilizado 
                  em breve com acesso via login exclusivo.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Em breve:</strong> Cada cliente 
                  terá acesso via subdomínio próprio (ex: suaempresa.jameksolutions.com.br) 
                  com login seguro e personalizado.
                </p>
              </div>

              <Button variant="industrial" className="w-full" asChild>
                <Link to="/contato">
                  Entrar em contato para acesso
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              O que você terá acesso
            </h2>
            <p className="text-muted-foreground">
              Recursos disponíveis na plataforma exclusiva para clientes JAMEK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-foreground rounded-2xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Já é cliente JAMEK?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Se você já possui um projeto conosco e precisa de acesso à plataforma, 
              entre em contato com nossa equipe de suporte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="industrial" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Acesso
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="xl"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Suporte
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
