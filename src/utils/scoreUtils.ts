
/**
 * Calculates the average of the given scores, rounded to the nearest integer.
 */
export const calculateAverageScore = (scores: number[]): number => {
  if (scores.length === 0) return 0;
  
  const sum = scores.reduce((total, score) => total + score, 0);
  return Math.round(sum / scores.length);
};
