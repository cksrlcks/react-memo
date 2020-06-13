export const SET_TOTAL = "SET_TOTAL";

export const set_total = (number) => {
  return {
    type: SET_TOTAL,
    total: number,
  };
};
