import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Icon name="Gamepad2" size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              GTA 5 RP • Los Santos
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent leading-tight">
            ВИРТУАЛЬНЫЕ
            <br />
            <span className="text-emerald-400">ДЕНЬГИ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Лучшие цены на виртуальную валюту для GTA 5 RP серверов. Быстро,
            безопасно, с гарантией.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("prices")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить виртуальные деньги
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-emerald-400/20 animate-pulse">
          <Icon name="DollarSign" size={40} />
        </div>
        <div className="absolute bottom-32 right-16 text-emerald-400/20 animate-pulse delay-1000">
          <Icon name="Coins" size={32} />
        </div>
        <div className="absolute top-1/3 right-20 text-emerald-400/20 animate-pulse delay-500">
          <Icon name="Banknote" size={36} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
