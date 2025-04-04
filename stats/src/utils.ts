export const dataStringToDate = (dateString: string): Date => {
  //28/18/2018
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
