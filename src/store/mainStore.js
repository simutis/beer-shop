import { observable, action, computed } from 'mobx';

class MainStore {
  @observable helloString = 'Hello mobx';
}

export default new MainStore();
