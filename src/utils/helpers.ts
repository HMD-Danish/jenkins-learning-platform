export const cn = (...classes: (string | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateScore = (correct: number, total: number): number => {
  return Math.round((correct / total) * 100);
};
