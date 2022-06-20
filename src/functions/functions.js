import { differenceInDays, differenceInHours, parseISO } from "date-fns";

// Functions
export const clipCheck = (clipped, _id) => {
  return !clipped.some((storeData) => storeData._id === _id);
};

export const dateFunc = (pub_date) => {
  if (Math.abs(differenceInDays(parseISO(pub_date), new Date())) > 0) {
    return (
      Math.abs(differenceInDays(parseISO(pub_date), new Date())) + " 일 전"
    );
  } else {
    return (
      Math.abs(differenceInHours(parseISO(pub_date), new Date())) + " 시간 전"
    );
  }
};
