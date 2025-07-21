import { RefObject, createRef } from 'react';

export class RefMap<T extends string> {
  private refs: Record<T, RefObject<HTMLDivElement>>;

  constructor(keys: T[]) {
    this.refs = {} as Record<T, RefObject<HTMLDivElement>>;
    for (const key of keys) {
      this.refs[key] = createRef<HTMLDivElement>();
    }
  }

  getRef(key: T): RefObject<HTMLDivElement> {
    return this.refs[key];
  }

  get allRefs(): Record<T, RefObject<HTMLDivElement>> {
    return this.refs;
  }
}
