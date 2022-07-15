import { ruRU, enUS } from "../constants/languageCodes";

export namespace MultilanguageTexts {
  export type One = {
    // TODO: дополнить список кодов
    language: MultilanguageTexts.Codes;
    text: string | Array<string>;
  };

  export type List = Array<MultilanguageTexts.One>;

  export type Codes = typeof ruRU | typeof enUS;
}
