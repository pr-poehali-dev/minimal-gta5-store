import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: "MessageSquare",
      url: "#",
      color: "hover:bg-indigo-600",
      description: "Присоединяйтесь к нашему серверу",
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "#",
      color: "hover:bg-blue-600",
      description: "Быстрая связь и новости",
    },
    {
      name: "VKontakte",
      icon: "Users",
      url: "#",
      color: "hover:bg-blue-700",
      description: "Наша группа ВКонтакте",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Выберите удобный способ связи для покупки или получения поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="text-center">
              <Button
                size="lg"
                className={`w-full h-24 bg-slate-700 hover:scale-105 transition-all duration-300 ${platform.color} text-white border border-slate-600 hover:border-transparent shadow-lg group`}
                onClick={() => window.open(platform.url, "_blank")}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon
                    name={platform.icon as any}
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-semibold text-lg">{platform.name}</span>
                </div>
              </Button>
              <p className="text-slate-400 text-sm mt-3">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 max-w-3xl mx-auto">
          <Icon
            name="Shield"
            size={48}
            className="text-emerald-400 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-white mb-3">
            Гарантии безопасности
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Мы работаем только с проверенными методами передачи виртуальной
            валюты. Все сделки проходят без риска для вашего аккаунта.
            Гарантируем полный возврат средств в случае любых проблем с
            доставкой.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
