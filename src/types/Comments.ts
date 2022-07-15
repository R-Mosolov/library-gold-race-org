export namespace Comments {
  export type One = {
    id: string;
    creationDate: Date;
    editionDate: Date;
    content: string;
    rating: number;
  };

  export type List = Array<Comments.One>;
}
