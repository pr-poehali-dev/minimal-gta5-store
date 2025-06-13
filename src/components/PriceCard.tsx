import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PriceCardProps {
  title: string;
  amount: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  discount?: string;
}

const PriceCard = ({
  title,
  amount,
  price,
  originalPrice,
  features,
  isPopular = false,
  discount,
}: PriceCardProps) => {
  return (
    <Card
      className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isPopular
          ? "border-emerald-500 bg-gradient-to-br from-slate-800 to-emerald-900/20 shadow-emerald-500/20"
          : "border-slate-700 bg-slate-800/50 hover:border-emerald-500/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-emerald-600 text-white px-4 py-1 text-sm font-semibold">
            <Icon name="Star" size={14} className="mr-1" />
            ПОПУЛЯРНЫЙ
          </Badge>
        </div>
      )}

      {discount && (
        <div className="absolute -top-2 -right-2">
          <Badge
            variant="destructive"
            className="bg-amber-600 text-white font-bold"
          >
            -{discount}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-white mb-2">
          {title}
        </CardTitle>
        <div className="text-3xl font-bold text-emerald-400 mb-1">{amount}</div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-white">{price}</span>
          {originalPrice && (
            <span className="text-lg text-slate-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Icon
              name="Check"
              size={16}
              className="text-emerald-400 flex-shrink-0"
            />
            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full font-semibold transition-all duration-300 ${
            isPopular
              ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/25"
              : "bg-slate-700 hover:bg-emerald-600 text-white"
          }`}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
