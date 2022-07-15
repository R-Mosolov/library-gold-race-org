export namespace Authors {
  export type One = {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
  };

  export type List = Array<Authors.One>;
}
