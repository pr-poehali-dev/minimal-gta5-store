import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState<string>("");

  // Курсы валют (рублей за 1K игровых долларов)
  const rates = {
    buy: 0.6, // Покупка: 0.6₽ за 1K
    sell: 0.45, // Продажа: 0.45₽ за 1K
  };

  const calculateTotal = () => {
    const numAmount = parseFloat(amount.replace(/[^\d.]/g, ""));
    if (isNaN(numAmount) || numAmount <= 0) return 0;

    const amountInK = numAmount / 1000; // Конвертируем в тысячи
    return Math.round(amountInK * rates[mode]);
  };

  const formatCurrency = (value: string) => {
    const numValue = parseFloat(value.replace(/[^\d]/g, ""));
    if (isNaN(numValue)) return "";

    return new Intl.NumberFormat("ru-RU").format(numValue);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setAmount(formatCurrency(value));
  };

  const total = calculateTotal();

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Калькулятор валюты
          </h2>
          <p className="text-xl text-slate-300">
            Рассчитайте стоимость покупки или продажи виртов
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-center">
              <Icon name="Calculator" className="inline mr-2" size={20} />
              Расчет стоимости
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Переключатель режима */}
            <div className="flex bg-slate-700 rounded-lg p-1">
              <Button
                variant={mode === "buy" ? "default" : "ghost"}
                className={`flex-1 ${
                  mode === "buy"
                    ? "bg-green-600 hover:bg-green-700"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMode("buy")}
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Покупка
              </Button>
              <Button
                variant={mode === "sell" ? "default" : "ghost"}
                className={`flex-1 ${
                  mode === "sell"
                    ? "bg-red-600 hover:bg-red-700"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMode("sell")}
              >
                <Icon name="Banknote" size={16} className="mr-2" />
                Продажа
              </Button>
            </div>

            {/* Поле ввода суммы */}
            <div className="space-y-2">
              <label className="text-sm text-slate-300">
                Сумма в игре (GTA$)
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="100000"
                  value={amount}
                  onChange={handleAmountChange}
                  className="bg-slate-700 border-slate-600 text-white pl-8"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                  $
                </span>
              </div>
            </div>

            {/* Курс */}
            <div className="bg-slate-700 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Курс:</span>
                <span className="text-white font-semibold">
                  {rates[mode]}₽ за 1K
                </span>
              </div>
            </div>

            {/* Итоговая сумма */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4">
              <div className="text-center">
                <p className="text-white/80 text-sm mb-1">
                  {mode === "buy" ? "К оплате:" : "К получению:"}
                </p>
                <p className="text-2xl font-bold text-white">
                  {total > 0 ? `${total}₽` : "0₽"}
                </p>
              </div>
            </div>

            {/* Кнопка действия */}
            <Button
              className={`w-full ${
                mode === "buy"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              disabled={!amount || total <= 0}
            >
              <Icon
                name={mode === "buy" ? "CreditCard" : "Send"}
                size={16}
                className="mr-2"
              />
              {mode === "buy"
                ? "Купить виртуальные деньги"
                : "Продать виртуальные деньги"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
