import { LETTERS } from "../data";

/**
 * @returns an unique value to set it for an HTML element ID or key
 * in the following proportions:
 * 1 - 26 [a-z]
 * 2 - 10 [0-9]
 * 3 - 26 [a-z]
 * 4 - 10 [0-9]
 * 5 - 26 [a-z]
 * The variability of getting non-unique value: 1 / 1.757.600
 */
const addID: () => string = () => {
  const DIGITS: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ENGLISH_LETTERS_NUMBER: number = 26;
  const DIGITS_NUMBER: number = 10;
  const MAX_ID_LENGTH: number = 5;
  let idx: number = 0;
  let result: string = "";

  for (let i = 0; i < MAX_ID_LENGTH; i++) {
    if (i === 0 || i === 2 || i === 4) {
      idx = Math.round(Math.random() * (ENGLISH_LETTERS_NUMBER - 1));
      result += LETTERS[idx];
    } else if (i === 1 || i === 3) {
      idx = Math.round(Math.random() * (DIGITS_NUMBER - 1));
      result += DIGITS[idx];
    }
  }

  return result;
};

export default addID;
