
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRightLeft } from 'lucide-react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');

  // Mock exchange rates (in a real app, you'd fetch these from an API)
  const exchangeRates: { [key: string]: { [key: string]: number } } = {
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.78, AUD: 0.018 },
    USD: { INR: 83.2, EUR: 0.92, GBP: 0.79, JPY: 148.5, AUD: 1.48 },
    EUR: { INR: 90.5, USD: 1.09, GBP: 0.86, JPY: 161.8, AUD: 1.61 },
    GBP: { INR: 105.2, USD: 1.26, EUR: 1.16, JPY: 188.1, AUD: 1.87 },
    JPY: { INR: 0.56, USD: 0.0067, EUR: 0.0062, GBP: 0.0053, AUD: 0.0099 },
    AUD: { INR: 56.7, USD: 0.68, EUR: 0.62, GBP: 0.53, JPY: 100.3 }
  };

  const currencies = [
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  const convertAmount = () => {
    const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
    return (parseFloat(amount) * rate).toFixed(2);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getSymbol = (code: string) => {
    return currencies.find(c => c.code === code)?.symbol || code;
  };

  return (
    <Card className="p-6 w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Currency Converter</h3>
      
      <div className="space-y-4">
        {/* From Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <div className="flex space-x-2">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="flex-1"
            />
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapCurrencies}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowRightLeft className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* To Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={convertAmount()}
              readOnly
              className="flex-1 bg-gray-50"
            />
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="text-center text-sm text-gray-600">
          1 {getSymbol(fromCurrency)} = {exchangeRates[fromCurrency]?.[toCurrency]?.toFixed(4) || 1} {getSymbol(toCurrency)}
        </div>
      </div>
    </Card>
  );
};

export default CurrencyConverter;
