import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Settings2, 
  Cpu, 
  Gauge, 
  Wifi, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automação Industrial",
    description: "Desenvolvimento e implementação de sistemas automatizados para otimização de processos produtivos.",
  },
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Projeto e montagem de painéis elétricos de comando e controle com certificação.",
  },
  {
    icon: Settings2,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes sistemas industriais para uma operação unificada e eficiente.",
  },
  {
    icon: Wifi,
    title: "IoT Industrial",
    description: "Monitoramento remoto e coleta de dados em tempo real para tomada de decisões.",
  },
];

const features = [
  "Equipe técnica especializada",
  "Suporte 24/7 para clientes",
  "Projetos personalizados",
  "Tecnologia de ponta",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 industrial-gradient opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M54.627%200l.83.828-1.415%201.415L51.8%200h2.827zM5.373%200l-.83.828L5.96%202.243%208.2%200H5.374zM48.97%200l3.657%203.657-1.414%201.414L46.143%200h2.828zM11.03%200L7.372%203.657%208.787%205.07%2013.857%200H11.03zm32.284%200L49.8%206.485%2048.384%207.9l-7.9-7.9h2.83zM16.686%200L10.2%206.485%2011.616%207.9l7.9-7.9h-2.83zm20.97%200l9.315%209.314-1.414%201.414L34.828%200h2.83zM22.344%200L13.03%209.314l1.414%201.414L25.172%200h-2.83zM32%200l12.142%2012.142-1.414%201.414L30%20.828%2017.272%2013.556l-1.414-1.414L28%200h4zM.284%200l28%2028-1.414%201.414L0%202.544V0h.284zM0%205.373l25.456%2025.455-1.414%201.415L0%208.2V5.374zm0%205.656l22.627%2022.627-1.414%201.414L0%2013.86v-2.83zm0%205.656l19.8%2019.8-1.415%201.413L0%2019.514v-2.83zm0%205.657l16.97%2016.97-1.414%201.415L0%2025.172v-2.83zM0%2028l14.142%2014.142-1.414%201.414L0%2030.828V28zm0%205.657L11.314%2044.97l-1.414%201.415L0%2036.485v-2.83zm0%205.657L8.485%2047.8l-1.414%201.414L0%2042.142v-2.83zm0%205.657l5.657%205.657-1.414%201.415L0%2047.8v-2.83zm0%205.657l2.828%202.83-1.414%201.414L0%2053.456v-2.83zM54.627%2060L30%2035.373%205.373%2060H8.2l21.8-21.8%2021.8%2021.8h2.827zm-5.656%200L30%2041.03%2011.03%2060h2.828L30%2043.858%2046.142%2060h2.83zm-5.656%200L30%2046.686%2016.686%2060h2.83L30%2049.515%2040.485%2060h2.83zm-5.657%200L30%2052.343%2022.344%2060h2.83L30%2055.172%2034.828%2060h2.83zM32%2060l-2-2-2%202h4z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container relative mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <Settings2 className="w-4 h-4" />
              Automação Industrial & Tecnologia
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Transformando a indústria com{" "}
              <span className="text-secondary">tecnologia inteligente</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Soluções completas em automação, painéis elétricos e monitoramento IoT 
              para otimizar seus processos industriais e aumentar a produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/software">Ver Software JAMEK</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos soluções completas para modernização e automação da sua indústria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="industrial-outline" asChild>
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Software Highlight */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Gauge className="w-4 h-4" />
                Plataforma IoT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Software JAMEK
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Nossa plataforma IoT industrial permite o monitoramento em tempo real 
                de todos os seus equipamentos, gerando insights para otimização de 
                processos e manutenção preditiva.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dashboard personalizado por cliente",
                  "Alertas em tempo real",
                  "Histórico completo de operações",
                  "Relatórios de performance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="industrial" asChild>
                <Link to="/software">
                  Ver Demonstração
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Cpu, value: "24", label: "Equipamentos", color: "text-primary" },
                    { icon: Shield, value: "99.8%", label: "Uptime", color: "text-success" },
                    { icon: BarChart3, value: "1.2k", label: "Leituras/min", color: "text-secondary" },
                    { icon: Zap, value: "85%", label: "Eficiência", color: "text-warning" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-background rounded-lg p-4">
                      <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-32 bg-background rounded-lg flex items-center justify-center">
                  <div className="flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90].map((h, i) => (
                      <div
                        key={i}
                        className="w-4 bg-primary/80 rounded-t animate-pulse-slow"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-16 text-center border border-border card-shadow">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pronto para modernizar sua indústria?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como a JAMEK Solutions pode transformar 
              seus processos industriais com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="industrial" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="industrial-outline" size="xl" asChild>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
