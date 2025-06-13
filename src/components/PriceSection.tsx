import PriceCard from "./PriceCard";

const PriceSection = () => {
  const pricePackages = [
    {
      title: "Стартовый",
      amount: "$500K",
      price: "299₽",
      features: [
        "Мгновенная доставка",
        "Безопасная передача",
        "Поддержка 24/7",
        "Гарантия возврата",
      ],
    },
    {
      title: "Популярный",
      amount: "$2M",
      price: "999₽",
      originalPrice: "1199₽",
      discount: "17%",
      isPopular: true,
      features: [
        "Мгновенная доставка",
        "Безопасная передача",
        "Поддержка 24/7",
        "Гарантия возврата",
        "Бонус: +200K бесплатно",
        "Приоритетная обработка",
      ],
    },
    {
      title: "Премиум",
      amount: "$5M",
      price: "2199₽",
      originalPrice: "2499₽",
      discount: "12%",
      features: [
        "Мгновенная доставка",
        "Безопасная передача",
        "Поддержка 24/7",
        "Гарантия возврата",
        "Бонус: +1M бесплатно",
        "VIP поддержка",
        "Скидка на следующую покупку",
      ],
    },
  ];

  return (
    <section
      id="prices"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Прайс-лист
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Выберите подходящий пакет виртуальных денег для GTA 5 RP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricePackages.map((pkg, index) => (
            <PriceCard key={index} {...pkg} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            💎 Все покупки проходят через безопасные методы передачи валюты
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
