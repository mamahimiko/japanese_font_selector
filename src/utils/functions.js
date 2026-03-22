export const getImageURL = (ImageParameter) => {
    return new URL(`../assets/images/${ImageParameter}`, import.meta.url).href;
  };
  