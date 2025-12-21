
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export function WhatsAppFloat() {
    const { pathname } = useLocation();
    const phone = "5519982184360";
    const message = encodeURIComponent("Olá! Gostaria de falar com a JAMEK Solutions.");

    // Don't render on contact page
    if (pathname === '/contato') return null;

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-end gap-4 group">
            {/* Chat Bubble Tooltip */}
            <div 
                className="hidden md:flex items-center bg-white text-foreground px-4 py-2 rounded-2xl shadow-lg border border-border/50 
                transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 origin-right mr-2"
            >
                <span className="text-sm font-medium whitespace-nowrap">Fale conosco agora!</span>
                {/* Arrow pointing to button */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent drop-shadow-sm"></div>
            </div>

            <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                aria-label="Falar no WhatsApp"
            >
                {/* Pulse Effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
                
                {/* Notification Dot */}
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 border-2 border-white rounded-full z-10 animate-bounce"></span>

                {/* WhatsApp Icon */}
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 md:w-9 md:h-9 relative z-0"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.309-5.235c0-5.443 4.429-9.873 9.875-9.873 2.636 0 5.115 1.026 6.98 2.89a9.851 9.851 0 012.891 6.981c.002 5.445-4.426 9.869-9.868 9.869M12 2C6.486 2 2 6.486 2 12c0 2.222.756 4.28 2.037 5.952L2.3 22l4.085-1.077A9.97 9.97 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2z" />
                </svg>
            </a>
        </div>
    );
}
