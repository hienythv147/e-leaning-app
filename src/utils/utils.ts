export const convertNumberOfInteraction = (count: number = 0): string => {
  const COUNT_ABBRS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
  const i = count === 0 ? count : Math.floor(Math.log(count) / Math.log(1000));
  const result = parseFloat((count / Math.pow(1000, i)).toFixed(1));
  return result + `${COUNT_ABBRS[i]}`;
};

export const formatPrice = (price: number): string => `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`;
