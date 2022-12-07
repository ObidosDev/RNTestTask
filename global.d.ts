declare module '*.png' {
  const value:
    | {
        uri: string;
      }
    | number;
  export default value;
}
