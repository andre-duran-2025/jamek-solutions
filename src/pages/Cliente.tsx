import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Monitor, 
  Lock,
  ArrowRight,
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8">
              <Lock className="w-4 h-4 text-primary" />
              Portal do Cliente
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Área do Cliente
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acesse sua plataforma de monitoramento exclusiva com dados em tempo real 
              dos seus equipamentos e sistemas automatizados.
            </p>
          </div>
        </div>
      </section>

      {/* Access Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Como funciona o acesso?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossos clientes têm acesso exclusivo a uma plataforma de monitoramento 
                personalizada, onde podem acompanhar em tempo real todos os equipamentos 
                e sistemas implementados pela JAMEK Solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                O acesso é feito através de credenciais únicas, fornecidas após a 
                implementação do projeto. Cada cliente possui seu próprio ambiente 
                isolado, garantindo a segurança e privacidade dos dados.
              </p>
              <ul className="space-y-4">
                {accessInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border soft-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl premium-gradient flex items-center justify-center mx-auto mb-6">
                  <Laptop className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Acesso à Plataforma
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O portal do cliente está em desenvolvimento e será disponibilizado 
                  em breve com acesso via login exclusivo.
                </p>
              </div>

              <div className="bg-secondary rounded-xl p-6 mb-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Em breve:</strong> Cada cliente 
                  terá acesso via subdomínio próprio (ex: suaempresa.jameksolutions.com.br) 
                  com login seguro e personalizado.
                </p>
              </div>

              <Button className="w-full rounded-full" asChild>
                <Link to="/contato">
                  Entrar em contato para acesso
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Recursos</p>
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
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 premium-gradient" />
            <div className="absolute inset-0 dot-pattern opacity-10" />
            
            <div className="relative px-8 py-16 lg:py-20 text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Já é cliente JAMEK?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                Se você já possui um projeto conosco e precisa de acesso à plataforma, 
                entre em contato com nossa equipe de suporte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="rounded-full px-8 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Acesso
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
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
        </div>
      </section>
    </Layout>
  );
}