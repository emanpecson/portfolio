import { MutableRefObject, useEffect } from 'react';

export class Section {
  private name: string;
  private isVisible: boolean;
  private ref: MutableRefObject<any>;

  constructor(name: string, isVisible: boolean, ref: MutableRefObject<any>) {
    this.name = name;
    this.isVisible = isVisible;
    this.ref = ref;

    // subscribe to changes in passed variable reference
    useEffect(() => {
      this.isVisible = isVisible;
    }, [isVisible]);
  }

  public getName() {
    return this.name;
  }
  public getIsVisible() {
    return this.isVisible;
  }
  public getRef() {
    return this.ref;
  }
}
