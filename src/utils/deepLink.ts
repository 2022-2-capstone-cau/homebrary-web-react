export const exeDeepLink = (path: string) => {
  const url = `homebrary://${path}`;
  location.href = url;
};
