import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Zap, 
  Settings2, 
  Wifi, 
  Wrench,
  ArrowRight,
  MonitorCog,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automação Industrial",
    description: "Desenvolvimento completo de sistemas automatizados para linhas de produção, desde o projeto até a implementação e comissionamento.",
    features: [
      "Programação de CLPs e IHMs",
      "Sistemas SCADA",
      "Controle de processos",
      "Integração com sensores e atuadores",
    ],
  },
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Projeto, fabricação e instalação de painéis elétricos de comando, força e distribuição seguindo normas técnicas.",
    features: [
      "Painéis de comando e controle",
      "CCMs e distribuição",
      "Retrofit de painéis antigos",
      "Adequação às normas NR-10",
    ],
  },
  {
    icon: Settings2,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes sistemas e equipamentos para uma operação unificada, permitindo troca de dados e controle centralizado.",
    features: [
      "Comunicação entre equipamentos",
      "Integração ERP/MES",
      "Protocolos industriais",
      "Migração de sistemas legados",
    ],
  },
  {
    icon: Wifi,
    title: "IoT Industrial",
    description: "Implementação de soluções de Internet das Coisas para monitoramento remoto e coleta de dados em tempo real.",
    features: [
      "Sensoriamento remoto",
      "Dashboards online",
      "Alertas e notificações",
      "Análise de dados operacionais",
    ],
  },
  {
    icon: MonitorCog,
    title: "Supervisório e SCADA",
    description: "Desenvolvimento de sistemas de supervisão para visualização e controle de processos industriais.",
    features: [
      "Telas sinóticas",
      "Histórico de variáveis",
      "Relatórios operacionais",
      "Controle remoto",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description: "Serviços de manutenção preventiva e corretiva para garantir a disponibilidade dos seus sistemas.",
    features: [
      "Manutenção preventiva",
      "Suporte técnico remoto",
      "Diagnóstico de falhas",
      "Treinamento operacional",
    ],
  },
];

export default function Servicos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluções completas em automação industrial, engenharia elétrica e 
              tecnologia para otimização de processos produtivos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Metodologia</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-muted-foreground">
              Nossa metodologia garante entregas de qualidade dentro do prazo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Levantamento detalhado das necessidades" },
              { step: "02", title: "Projeto", desc: "Desenvolvimento técnico da solução" },
              { step: "03", title: "Execução", desc: "Implementação e testes rigorosos" },
              { step: "04", title: "Suporte", desc: "Acompanhamento pós-entrega" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-2xl premium-gradient flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl font-mono">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
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
                Precisa de uma solução personalizada?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                Nossa equipe técnica está pronta para analisar seu projeto e propor 
                a melhor solução para sua necessidade.
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}