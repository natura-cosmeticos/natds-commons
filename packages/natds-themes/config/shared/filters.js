export const filterCategory = (
  { attributes }, categoryName,
) => attributes.category === categoryName;

export default filterCategory;
