export const daysLeft = (deadline) => {
  const diff = new Date(deadline).getTime() - Date.now();
  const remainingDays = diff / (1000 * 60 * 60 * 24);
  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);
  return percentage > 100 ? 100 : percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
