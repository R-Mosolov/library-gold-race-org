import { Authors } from "./Authors";
import { Comments } from "./Comments";

export namespace Books {
  export namespace Meta {
    export type One = {
      id: string;
      title: string;
      authors: Authors.List;
      series: string;
      annotation: string;
    };
  }

  export namespace Details {
    export type One = {
      id: string;
      title: string;
      authors: Authors.List;
      addingDate: Date;
      series: string;
      pagesTotal: number;
      annotation: string;
      content: string;
      comments: Comments.List;
    };
  }
}
