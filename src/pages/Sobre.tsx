import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  Building2,
  Wrench,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Compromisso com o Resultado",
    description: "Não entregamos apenas projetos; entregamos performance. Nosso foco é garantir que sua linha de produção opere na capacidade máxima.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Nossa engenharia segue rigorosamente as normas nacionais e internacionais (IEC, NBR, NR), garantindo segurança e conformidade.",
  },
  {
    icon: Users,
    title: "Parceria de Longo Prazo",
    description: "Atuamos como um braço de engenharia dentro da sua empresa. Entendemos seu negócio para propor as melhores soluções.",
  },
  {
    icon: Wrench,
    title: "Suporte Proativo",
    description: "Monitoramento constante e manutenção preventiva. Nosso objetivo é evitar paradas antes que elas aconteçam.",
  },
];

const milestones = [
  { year: "2015", event: "Fundação da JAMEK Solutions com foco em automação de pequeno porte." },
  { year: "2017", event: "Primeiros grandes projetos de painéis elétricos para indústria alimentícia." },
  { year: "2019", event: "Implementação das primeiras células de IoT industrial (IIoT)." },
  { year: "2021", event: "Lançamento oficial da plataforma Software JAMEK v1.0." },
  { year: "2023", event: "Marca de 100+ projetos entregues e expansão da equipe de engenharia." },
  { year: "2024", event: "Certificação de parceiros integradores de grandes marcas globais." }
];

const certifications = [
  "NR-10 (Segurança em Instalações Elétricas)",
  "NR-12 (Segurança em Máquinas e Equipamentos)",
  "ISO 9001 (Gestão da Qualidade)",
  "Protocolos Industriais (Profinet, Modbus, OPC UA)"
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">JAMEK Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais do que uma empresa de automação: somos parceiros estratégicos
              para a modernização da indústria brasileira. Unimos engenharia elétrica
              de ponta com o poder da Internet das Coisas.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8">
                <Building2 className="w-4 h-4 text-primary" />
                Nossa História
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Engenharia sólida, <br /> Inovação constante
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p>
                  A JAMEK Solutions foi fundada por engenheiros apaixonados por tecnologia, que
                  perceberam uma lacuna no mercado: a desconexão entre a automação industrial
                  tradicional (robusta, mas rígida) e as novas tecnologias digitais (ágeis e conectadas).
                </p>
                <p>
                  Começamos projetando painéis elétricos e programando CLPs para pequenas indústrias.
                  Rapidamente, nossa obsessão por qualidade técnica nos levou a projetos maiores,
                  atendendo setores críticos como alimentício, farmacêutico e metalúrgico.
                </p>
                <p>
                  Em 2019, demos nosso passo mais ousado: integrar IoT nativamente em nossos projetos.
                  Não queríamos apenas máquinas que funcionassem, queríamos máquinas que "falassem".
                  Hoje, o Software JAMEK é o cérebro por trás de dezenas de operações industriais,
                  trazendo visibilidade em tempo real para gestores que antes operavam no escuro.
                </p>
                <p>
                  Nossa equipe é formada por especialistas multidisciplinares: engenheiros eletricistas,
                  desenvolvedores de software e técnicos de campo, todos trabalhando em sintonia
                  para entregar soluções "chave na mão".
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Milestones Card */}
              <div className="bg-card rounded-2xl p-8 border border-border soft-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-8 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Marcos da Nossa Trajetória
                </h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 pt-1 text-sm font-bold text-primary font-mono text-right">
                        {milestone.year}
                      </div>
                      <div className="relative flex-1 pb-6 border-l border-border pl-6 last:pb-0 last:border-0">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                        <p className="text-foreground text-sm leading-relaxed">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Card */}
              <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-success" />
                  Conformidade & Segurança
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-background border border-border hover-lift transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Democratizar o acesso à Indústria 4.0 no Brasil, fornecendo soluções de
                  automação e IoT robustas, seguras e financeiramente viáveis, que transformem
                  o chão de fábrica em um ambiente inteligente e produtivo."
                </p>
              </div>
            </div>

            <div className="p-10 rounded-2xl bg-background border border-border hover-lift transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Ser a principal referência nacional em integração de sistemas industriais híbridos
                  (Hardware + Software) até 2030, reconhecida não apenas pela tecnologia,
                  mas pela capacidade de resolver problemas reais de engenharia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Cultura JAMEK</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nossos Princípios Inegociáveis
            </h2>
            <p className="text-muted-foreground">
              Valores que guiam cada linha de código e cada parafuso apertado em nossos projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sua indústria em boas mãos
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Converse com nossos engenheiros e entenda como nossa expertise pode
            otimizar seus resultados operacionais.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 group font-semibold" asChild>
            <Link to="/contato">
              Falar com Engenharia
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}