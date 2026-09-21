let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};

export const scrollToHash = (hash) => {
  lenis?.scrollTo(hash);
};
