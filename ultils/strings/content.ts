const lowercaseAndRemoveDiacritics = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
};

const convertToLowerUsLang = (str: string): string => {
  if (!str) {
    return "";
  }
  return lowercaseAndRemoveDiacritics(`${str}`);
};

const convertToMoneyString = (n: number): string => {
  return n.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });
};

export default {
  convertToLowerUsLang,
  convertToMoneyString,
};
