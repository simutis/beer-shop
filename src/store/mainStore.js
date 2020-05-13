import { observable, action, computed } from 'mobx';

class MainStore {
  @observable activeTab = 1;
  @observable all = [];
  @observable pizza = [];
  @observable steak = [];
  @observable activeSection = 'all';

  setActiveSection = action('set-active-section', section => {
    this.activeSection = section;
  });

  setActiveTab = action('set-active-tab', activeTab => {
    this.activeTab = activeTab;
  });

  setAll = action('set-all-beers', beers => {
    this.all = beers;
  });

  setPizza = action('set-pizza-beers', beers => {
    this.pizza = beers;
  });

  setSteak = action('set-steak-beers', beers => {
    this.steak = beers;
  });

  fetchBeers = action('fetch-beers', async section => {
    const queryMap = {
      all: {},
      pizza: {},
      steak: {}
    };

    const query = new URLSearchParams(queryMap[section]).toString();
    const url = `https://api.punkapi.com/v2/beers?${query}`;

    const response = await fetch(url);
    const data = await response.json();

    const handler = `set${section.substring(0, 1).toUpperCase() +
      section.substring(1)}`;

    this[handler](data);

    console.log('---beers: ', data);
  });
}

export default new MainStore();
