import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Gauge,
  Wifi,
  Zap,
  BarChart3,
  ShieldCheck,
  Settings2,
  ChevronRight,
  CheckCircle2,
  Clock,
  Trophy
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automação Industrial",
    description: "Sistemas automatizados para otimização de processos produtivos.",
  },
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Projeto e montagem de painéis de comando e controle.",
  },
  {
    icon: Settings2,
    title: "Integração de Sistemas",
    description: "Conexão de sistemas industriais para operação unificada.",
  },
  {
    icon: Wifi,
    title: "IoT Industrial",
    description: "Monitoramento remoto e coleta de dados em tempo real.",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projetos Realizados",
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    value: "99.8%",
    label: "Uptime Garantido",
    icon: ShieldCheck,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    value: "24/7",
    label: "Suporte Técnico",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    value: "12+",
    label: "Anos de Experiência",
    icon: Trophy,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
              Automação Industrial & IoT
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] animate-fade-in-up">
              Transformamos sua
              <span className="block text-gradient">indústria com</span>
              tecnologia inteligente
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Soluções completas em automação, painéis elétricos e monitoramento IoT
              para otimizar seus processos e aumentar a produtividade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" className="rounded-full px-8 group" asChild>
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/software">Conheça o Software</Link>
              </Button>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="glass-card rounded-2xl p-8 w-80 shadow-2xl backdrop-blur-xl border-primary/20 hover-lift">
              <div className="space-y-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground font-mono leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile */}
      <section className="lg:hidden py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <div className="text-2xl font-bold text-foreground font-mono">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Serviços</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Soluções para sua indústria
              </h2>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Ver todos os serviços
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Highlight */}
      <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 grid-pattern opacity-5" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                Plataforma IoT
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-background mb-6">
                Software JAMEK
              </h2>
              <p className="text-lg text-background/70 mb-8 leading-relaxed">
                Nossa plataforma IoT industrial permite o monitoramento em tempo real
                de todos os seus equipamentos, gerando insights para otimização de
                processos e manutenção preditiva.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Dashboard personalizado",
                  "Alertas em tempo real",
                  "Histórico de operações",
                  "Relatórios automáticos",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-background/80">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full px-8 group" asChild>
                <Link to="/software">
                  Ver Demonstração
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 premium-gradient rounded-3xl opacity-20 blur-3xl" />
              <div className="relative bg-card rounded-2xl p-6 soft-shadow">
                {/* Mini dashboard */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Cpu, value: "24", label: "Equipamentos", color: "text-primary" },
                    { icon: ShieldCheck, value: "99.8%", label: "Uptime", color: "text-success" },
                    { icon: BarChart3, value: "1.2k", label: "Leituras/min", color: "text-primary" },
                    { icon: Gauge, value: "85%", label: "Eficiência", color: "text-warning" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary rounded-xl p-4">
                      <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                      <div className="text-2xl font-bold text-foreground font-mono">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="h-40 bg-secondary rounded-xl flex items-end justify-center gap-2 px-4 pb-4">
                  {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/60 rounded-t-sm transition-all duration-1000"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 premium-gradient" />
            <div className="absolute inset-0 dot-pattern opacity-10" />

            <div className="relative px-8 py-16 lg:py-24 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Pronto para modernizar sua indústria?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                Entre em contato e descubra como podemos transformar
                seus processos industriais com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href="https://wa.me/5519982184360"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
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