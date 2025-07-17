export class SDKError extends Error {
  public title: string;
  public context: any | null;

  constructor(title: string, context: any | null) {
    super(`SDK > ${title}`);
    this.context = context;
  }
}
