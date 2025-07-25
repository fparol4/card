export class SDKError extends Error {
  constructor(
    public title: string,
    public context: any | null,
  ) {
    super(`SDK > ${title}`);
  }
}
