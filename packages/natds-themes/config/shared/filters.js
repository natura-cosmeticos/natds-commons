export const filterCategory = (
  { attributes }, categoryName,
) => attributes.category === categoryName;

export const isProp = (
  { path }, propName,
) => path.includes(propName);

export default filterCategory;
