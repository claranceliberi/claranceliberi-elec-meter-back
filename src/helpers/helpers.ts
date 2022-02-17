export function generate8DigitToken(ammout: number): string {
  const d = calculateDaysPerAmmount(ammout);

  return [r(), d[0], r(), d[1], r(), d[2], r(), d[3]].join('');
}

export function calculateDaysPerAmmount(ammount: number): string {
  const days = Math.floor(ammount % 100);
  return days.toString().padStart(4, '0');
}

export function r() {
  return Math.floor(Math.random() * 10);
}

export function getDaysFromToken(token: string): number {
  const parts = token.split('');
  return parseInt([parts[1], parts[3], parts[5], parts[7]].join(''));
}
