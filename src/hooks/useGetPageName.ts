export const useGetPageName = (pathName: string) => {
  const parts = pathName.split("/");
  const pageName = parts[parts.length - 1];
  if (pageName) {
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  }
};
