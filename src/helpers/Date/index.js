// export const MONTHS = {
//   1: "janvier",
//   2: "février",
//   3: "mars",
//   4: "avril",
//   5: "mai",
//   6: "juin",
//   7: "juillet",
//   8: "août",
//   9: "septembre",
//   10: "octobre",
//   11: "novembre",
//   12: "décembre",
// };

// MODIFICATION
// on diminue les index de 1 cae un tableau commence toujours par
// 0 donc évite de mettre +1 au niveau de getMonth
export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];
