import { Link } from "react-router-dom";
import { Settings2, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Settings2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">JAMEK</span>
                <span className="text-[10px] font-medium opacity-70 -mt-1 tracking-wider">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Soluções em automação industrial, engenharia elétrica e tecnologia IoT para otimização de processos industriais.
            </p>
          </div>

          {/* Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Sobre", href: "/sobre" },
                { name: "Serviços", href: "/servicos" },
                { name: "Software JAMEK", href: "/software" },
                { name: "Área do Cliente", href: "/cliente" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Automação Industrial</li>
              <li>Painéis Elétricos</li>
              <li>Integração de Sistemas</li>
              <li>IoT Industrial</li>
              <li>Supervisão e Manutenção</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                contato@jamek.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                (19) 9 8218-4360
              </li>

            </ul>

          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 lg:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} JAMEK Solutions. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Automação Industrial & Tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
}
