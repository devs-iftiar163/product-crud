/**
 * Random ID
 */

export const generateRandomId = (length = 24) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

/**
 * Create Slug
 */

export const createProductSlug = (productName) => {
  // Convert the product name to lowercase and replace spaces with hyphens
  const slug = productName.toLowerCase().replace(/\s+/g, "-");

  // Remove any special characters and non-alphanumeric characters
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, "");

  return cleanSlug;
};
