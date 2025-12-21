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
  ChevronRight,
  Factory,
  Droplets,
  Pill,
  Wheat,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automação Industrial Avançada",
    description: "Projetamos células robotizadas e linhas de automação completas. Automatize tarefas repetitivas e aumente sua OEE (Overall Equipment Effectiveness).",
    features: [
      "Programação Avançada (Siemens, Rockwell, Schneider)",
      "Redes Industriais (Profinet, Ethernet/IP, EtherCAT)",
      "Segurança de Máquinas (Safety PLC)",
      "Comissionamento e Startup Assistido",
    ],
  },
  {
    icon: Zap,
    title: "Engenharia de Painéis Elétricos",
    description: "Montagem certificada de quadros elétricos de baixa tensão. Projetos TTA/PTTA com foco em durabilidade, organização e conformidade NR-10.",
    features: [
      "QGBTs e CCMs Inteligentes",
      "Quadros de Automação e Remotas",
      "Bancos de Capacitores Automáticos",
      "Retrofit e Modernização de Painéis",
    ],
  },
  {
    icon: Wifi,
    title: "IIoT & Indústria 4.0",
    description: "Transformação digital do chão de fábrica. Conectamos seus ativos legados à nuvem para monitoramento preditivo e análise de dados.",
    features: [
      "Integração via MQTT e OPC UA",
      "Gateways Edge Computing",
      "Dashboards Gerenciais Cloud/On-Premise",
      "Alertas via Telegram/Email/SMS",
    ],
  },
  {
    icon: Settings2,
    title: "Integração de Sistemas",
    description: "Fim das ilhas de dados. Integramos OT (Chão de Fábrica) com IT (ERP, MES), garantindo fluxo contínuo de informações estratégicas.",
    features: [
      "Verticalização de Dados (Chão -> ERP)",
      "Rastreabilidade de Produto e Processo",
      "Conversores de Protocolos",
      "Banco de Dados SQL Industrial",
    ],
  },
  {
    icon: MonitorCog,
    title: "Sistemas Supervisórios (SCADA)",
    description: "Interfaces Homem-Máquina (IHM) intuitivas e Sistemas Supervisórios de alta performance para controle centralizado da planta.",
    features: [
      "Desenvolvimento em Elipse E3, ScadaBR, Ignition",
      "Sistemas Historian para Big Data",
      "Relatórios Automáticos de Produção",
      "Acesso Remoto Seguro (VPN)",
    ],
  },
  {
    icon: Wrench,
    title: "Consultoria e Suporte Técnico",
    description: "Não te deixamos na mão. Oferecemos contratos de manutenção (SLA) e consultoria especializada para diagnósticos complexos.",
    features: [
      "Plantão Técnico 24/7",
      "Manutenção Preventiva Programada",
      "Laudos Técnicos e termografia",
      "Treinamento de Operadores",
    ],
  },
];

const industries = [
  { icon: Factory, name: "Metalurgia e Siderurgia" },
  { icon: Droplets, name: "Saneamento e Tratamento" },
  { icon: Pill, name: "Farmacêutica e Cosméticos" },
  { icon: Wheat, name: "Alimentos e Bebidas" },
];

export default function Servicos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Expertise Técnica para <br />
              <span className="text-gradient">Desafios Industriais Complexos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Combinamos engenharia elétrica tradicional com o que há de mais moderno em
              software industrial para entregar soluções robustas, escaláveis e à prova de futuro.
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
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                  <service.icon className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-border/50">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground font-mono">Setores de Atuação</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group">
                <ind.icon className="w-8 h-8 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground text-center">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Metodologia JAMEK</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Do Conceito ao Comissionamento
            </h2>
            <p className="text-muted-foreground">
              Nosso processo de engenharia elimina riscos e garante previsibilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

            {[
              { step: "01", title: "Diagnóstico", desc: "Mapeamento técnico e estudo de viabilidade econômica." },
              { step: "02", title: "Projeto Básico", desc: "Definição de arquitetura, hardware e cronograma físico-financeiro." },
              { step: "03", title: "Execução", desc: "Montagem, programação e testes em fábrica (FAT)." },
              { step: "04", title: "Entrega", desc: "Instalação, testes em campo (SAT) e operação assistida." },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors shadow-sm z-10 relative">
                  <span className="text-2xl font-bold text-primary font-mono">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">
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
                Grandes projetos começam com uma conversa
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                Fale com nossos engenheiros. Podemos desenhar a solução ideal
                para o seu gargalo produtivo hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Visita Técnica
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
                    Atendimento via WhatsApp
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