import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Building2,
  Wrench
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Compromisso",
    description: "Cumprimos prazos e entregamos soluções que funcionam desde o primeiro dia.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Utilizamos componentes de primeira linha e seguimos normas técnicas rigorosas.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes para entender suas necessidades.",
  },
  {
    icon: Wrench,
    title: "Suporte",
    description: "Oferecemos assistência técnica contínua e manutenção preventiva.",
  },
];

const milestones = [
  { year: "2015", event: "Fundação da JAMEK Solutions" },
  { year: "2017", event: "Primeiros projetos de automação industrial" },
  { year: "2019", event: "Expansão para IoT e monitoramento remoto" },
  { year: "2021", event: "Lançamento do Software JAMEK" },
  { year: "2023", event: "+100 projetos entregues" },
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">JAMEK Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos uma empresa especializada em automação industrial, engenharia elétrica 
              e soluções tecnológicas para otimização de processos produtivos.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Nossa História
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Engenharia e inovação a serviço da indústria
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A JAMEK Solutions nasceu da experiência de profissionais com anos de 
                  atuação no setor industrial. Identificamos a necessidade de empresas 
                  em modernizar seus processos e adotar tecnologias que realmente 
                  fazem diferença no dia a dia operacional.
                </p>
                <p>
                  Desde então, desenvolvemos soluções em automação, painéis elétricos 
                  e sistemas de monitoramento IoT que permitem aos nossos clientes 
                  ter controle total sobre suas operações.
                </p>
                <p>
                  Nossa abordagem é sempre técnica e personalizada: entendemos que 
                  cada indústria tem suas particularidades e desafios únicos.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Nossa Trajetória
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-sm font-semibold text-primary">
                      {milestone.year}
                    </div>
                    <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                      <p className="text-sm text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Fornecer soluções em automação e tecnologia que aumentem a eficiência 
                operacional e competitividade de nossos clientes, com excelência 
                técnica e compromisso com resultados.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em automação industrial e IoT, reconhecida pela 
                qualidade técnica, inovação constante e pelo impacto positivo 
                que geramos na operação de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground">
              Os princípios que guiam nosso trabalho e relacionamento com clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa a alcançar 
            novos patamares de eficiência.
          </p>
          <Button variant="industrial" size="xl" asChild>
            <Link to="/contato">
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
