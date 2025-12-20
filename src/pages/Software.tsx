import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Gauge, 
  Wifi, 
  WifiOff, 
  AlertTriangle, 
  Activity,
  ArrowRight,
  Info,
  TrendingUp,
  BarChart3,
  Clock
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Simulated data for demonstration
const operationHistory = [
  { time: "00:00", value: 78, efficiency: 85 },
  { time: "04:00", value: 82, efficiency: 88 },
  { time: "08:00", value: 91, efficiency: 92 },
  { time: "12:00", value: 88, efficiency: 90 },
  { time: "16:00", value: 95, efficiency: 94 },
  { time: "20:00", value: 87, efficiency: 89 },
  { time: "24:00", value: 84, efficiency: 87 },
];

const performanceData = [
  { name: "Consumo", value: 72, color: "hsl(var(--primary))" },
  { name: "Eficiência", value: 89, color: "hsl(var(--success))" },
  { name: "Performance", value: 85, color: "hsl(var(--primary))" },
];

const equipment = [
  { name: "Inversor 01", status: "online", production: "1.2 MW" },
  { name: "Inversor 02", status: "online", production: "1.1 MW" },
  { name: "Inversor 03", status: "alert", production: "0.8 MW" },
  { name: "Inversor 04", status: "offline", production: "—" },
];

const alerts = [
  { type: "warning", message: "Inversor 03 - Temperatura acima do normal", time: "15:42" },
  { type: "error", message: "Inversor 04 - Falha de comunicação", time: "14:30" },
  { type: "info", message: "Manutenção preventiva agendada - Inversor 02", time: "10:00" },
];

const stats = [
  { 
    icon: Wifi, 
    label: "Equipamentos Online", 
    value: "2", 
    color: "text-success",
    bgColor: "bg-success/10" 
  },
  { 
    icon: WifiOff, 
    label: "Equipamentos Offline", 
    value: "1", 
    color: "text-destructive",
    bgColor: "bg-destructive/10" 
  },
  { 
    icon: AlertTriangle, 
    label: "Alertas Ativos", 
    value: "2", 
    color: "text-warning",
    bgColor: "bg-warning/10" 
  },
  { 
    icon: Activity, 
    label: "Produção Atual", 
    value: "3.1 MW", 
    color: "text-primary",
    bgColor: "bg-primary/10" 
  },
];

export default function Software() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8">
              <Gauge className="w-4 h-4 text-primary" />
              Plataforma IoT Industrial
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Software JAMEK
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Demonstração das funcionalidades do sistema de monitoramento IoT industrial. 
              Visualize dados em tempo real, alertas e métricas de performance dos seus equipamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
            <Info className="w-4 h-4" />
            <span>Dados simulados para fins de demonstração</span>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border soft-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Line Chart - Operation History */}
            <div className="bg-card rounded-2xl p-6 border border-border soft-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Histórico de Operação</h3>
                  <p className="text-sm text-muted-foreground">Últimas 24 horas</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Atualizado agora
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={operationHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="time" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                      name="Produção (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="hsl(var(--success))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--success))" }}
                      name="Eficiência (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart - Performance Metrics */}
            <div className="bg-card rounded-2xl p-6 border border-border soft-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Métricas de Performance</h3>
                  <p className="text-sm text-muted-foreground">Indicadores atuais</p>
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]}
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      width={80}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px"
                      }}
                      formatter={(value) => [`${value}%`, 'Valor']}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="hsl(var(--primary))"
                      radius={[0, 6, 6, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Equipment & Alerts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Equipment List */}
            <div className="bg-card rounded-2xl p-6 border border-border soft-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Equipamentos</h3>
                <span className="text-sm text-muted-foreground font-mono">4 dispositivos</span>
              </div>
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === "online" ? "bg-success" :
                        item.status === "alert" ? "bg-warning animate-pulse" :
                        "bg-destructive"
                      }`} />
                      <span className="font-medium text-foreground">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground font-mono">
                        {item.production}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        item.status === "online" ? "bg-success/10 text-success" :
                        item.status === "alert" ? "bg-warning/10 text-warning" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {item.status === "online" ? "Online" :
                         item.status === "alert" ? "Alerta" : "Offline"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-card rounded-2xl p-6 border border-border soft-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Alertas Recentes</h3>
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border ${
                      alert.type === "error" ? "bg-destructive/5 border-destructive/20" :
                      alert.type === "warning" ? "bg-warning/5 border-warning/20" :
                      "bg-primary/5 border-primary/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === "error" ? "bg-destructive" :
                          alert.type === "warning" ? "bg-warning" :
                          "bg-primary"
                        }`} />
                        <p className="text-sm text-foreground">{alert.message}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">
                        {alert.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Notice Footer */}
          <div className="bg-secondary rounded-2xl p-8 text-center mb-8">
            <Info className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
            <p className="font-semibold text-foreground mb-2">
              Demonstração Visual
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Esta é uma demonstração das funcionalidades do Software JAMEK. 
              Os dados apresentados são simulados para ilustrar as capacidades do sistema.
            </p>
          </div>

          {/* CTA */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 premium-gradient" />
            <div className="absolute inset-0 dot-pattern opacity-10" />
            
            <div className="relative px-8 py-12 lg:py-16 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Quer ver o Software JAMEK em ação?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Entre em contato e agende uma demonstração personalizada para sua indústria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="rounded-full px-8 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Demonstração
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Fale pelo WhatsApp
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