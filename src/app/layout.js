import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GreenMarket",
  description: "Marketplace de Créditos Verdes",
};

function NavTabs() {
  // Nota: no conocemos aquí la ruta activa sin usar usePathname, que es client-side.
  // Para mantener el layout como server component, dejamos estilos neutros y usamos
  // Links básicos. El resaltado activo se puede añadir luego con un client component.
  return (
    <div className="border-b border-border bg-card/60">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 text-sm">
        <Link href="/marketplace" className="py-3 font-semibold text-muted-foreground hover:text-foreground">
          Marketplace
        </Link>
        <Link href="/mis-creditos" className="py-3 font-semibold text-muted-foreground hover:text-foreground">
          Mis Créditos
        </Link>
        <Link href="/premium" className="py-3 font-semibold text-muted-foreground hover:text-foreground">
          Premium
        </Link>
        <Link href="/mis-publicaciones" className="py-3 font-semibold text-muted-foreground hover:text-foreground">
          Mis Publicaciones
        </Link>
        <Link href="/mi-cuenta" className="py-3 font-semibold text-muted-foreground hover:text-foreground">
          Mi Cuenta
        </Link>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {/* Header compartido */}
        <header className="border-b border-border bg-card/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="font-semibold text-lg text-foreground">GreenMarket</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md">
                Vender
              </button>
              <Link
                href="/mi-cuenta"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/mi-cuenta"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </header>

        {/* Tabs de navegación */}
        <NavTabs />

        {/* Contenido de cada página */}
        {children}
      </body>
    </html>
  );
}
