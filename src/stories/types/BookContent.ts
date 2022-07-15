export namespace BookContent {
  export type SectionsList = Array<BookContent.Section>;

  export type Section = {
    readonly title: string;
    readonly content: Array<BookContent.Content>;
  };

  export type Content = {
    readonly text: string;
    readonly type: 'bold'; // TODO: вынести в константу
  } | string;
};