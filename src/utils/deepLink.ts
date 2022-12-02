export const exeDeepLink = (path: string) => {
  const url = `homebrary://web?url=${path}`;
  location.href = url;
};
