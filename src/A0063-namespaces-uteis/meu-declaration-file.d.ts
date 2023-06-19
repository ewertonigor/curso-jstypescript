declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare let global: typeof globalThis & {
  MYGLOBAL: string;
};
