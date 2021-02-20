export const convertToCurrency = (angka: any, currency = "") => {
  const value = angka.toString().split(".")[0];
  let newCurrency = "";
  const toReverse = value
    .toString()
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < toReverse.length; i++) {
    if (i % 3 === 0) {
      newCurrency += toReverse.substr(i, 3) + ".";
    }
  }
  return (
    currency +
    newCurrency
      .split("", newCurrency.length - 1)
      .reverse()
      .join("")
  );
};
