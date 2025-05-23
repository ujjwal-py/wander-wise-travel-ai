
import { useCurrency } from '@/contexts/CurrencyContext';

export const usePrice = () => {
  const { convertPrice } = useCurrency();
  
  return {
    formatPrice: (usdPrice: number) => convertPrice(usdPrice),
  };
};
