import { action, makeObservable, observable } from 'mobx';

export type RootStoreType = {
  loaders: string[];
};
export const initialRootState: RootStoreType = {
  loaders: [],
};
export class RootStore {
  state = initialRootState;
  constructor() {
    makeObservable(this, {
      state: observable,
      addLoader: action,
      removeLoader: action,
    });
  }

  addLoader = (loaderName: string) => {
    this.state.loaders.push(loaderName);
  };
  removeLoader = (loaderName: string) => {
    this.state.loaders = this.state.loaders.filter((loader) => loader !== loaderName);
  };
}

export default new RootStore();
