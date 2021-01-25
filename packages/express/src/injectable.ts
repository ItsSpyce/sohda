export default class Injectable {
  protected readonly args: any;

  constructor(constructorArgs?: any) {
    this.args = constructorArgs;
  }
}
