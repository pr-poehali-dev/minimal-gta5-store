import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">GTA Money</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => scrollToSection("prices")}
            >
              Прайс-лист
            </Button>
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Контакты
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-300"
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
