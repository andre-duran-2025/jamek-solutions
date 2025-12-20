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
  CheckCircle2,
  MonitorCog
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
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soluções completas em automação industrial, engenharia elétrica e 
              tecnologia para otimização de processos produtivos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-muted-foreground">
              Nossa metodologia garante entregas de qualidade dentro do prazo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Análise", desc: "Levantamento detalhado das necessidades" },
              { step: "02", title: "Projeto", desc: "Desenvolvimento técnico da solução" },
              { step: "03", title: "Execução", desc: "Implementação e testes rigorosos" },
              { step: "04", title: "Suporte", desc: "Acompanhamento pós-entrega" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full industrial-gradient flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
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
              Precisa de uma solução personalizada?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Nossa equipe técnica está pronta para analisar seu projeto e propor 
              a melhor solução para sua necessidade.
            </p>
            <Button variant="industrial" size="xl" asChild>
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
