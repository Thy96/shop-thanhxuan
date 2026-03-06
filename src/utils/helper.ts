export function formatCurrency(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("vi-VN");
};