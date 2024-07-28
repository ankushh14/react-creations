export const generateID = () => {
  return Math.floor(Math.random() * 10000000);
};

export const generateRandomUUID = () => {
  return crypto.randomUUID();
};
