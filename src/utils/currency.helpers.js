export function getCurrencySymbol(currency) {
  const symbol = {
    'eur': '€',
    'rub': '₽',
    'usd': '$'
  }

  return symbol[currency]
}