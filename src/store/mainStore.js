import { observable, action, computed } from 'mobx';

class MainStore {
  @observable activeTab = 0;
  @observable allBeers = [];
  @observable pizzaBeers = [];
  @observable steakBeers = [];
  @observable activeSection = 0;
  @observable pagesFetched = {
    all: 0,
    pizza: 0,
    steak: 0
  };

  setPagesFetched = action('set-pages-fetched', (name, page) => {
    this.pagesFetched = { ...this.pagesFetched, [name]: page };
  });

  setActiveSection = action('set-active-section', section => {
    this.activeSection = section;
  });

  setActiveTab = action('set-active-tab', activeTab => {
    this.activeTab = activeTab;
  });

  setAllBeers = action('set-all-beers', beers => {
    this.allBeers = [...this.allBeers, ...beers];
  });

  setPizzaBeers = action('set-pizza-beers', beers => {
    this.pizzaBeers = [...this.pizzaBeers, ...beers];
  });

  setSteakBeers = action('set-steak-beers', beers => {
    this.steakBeers = [...this.steakBeers, ...beers];
  });

  fetchBeers = action('fetch-beers', async ({ section, page }) => {
    const queryObj = {};

    if (page) {
      queryObj.page = page;
    }

    if (section !== 'all') {
      queryObj.food = section;
    }

    const query = new URLSearchParams(queryObj).toString();
    console.log('---query: ', query);
    const url = `https://api.punkapi.com/v2/beers?${query}`;

    const response = await fetch(url);
    const data = await response.json();

    const handler = `set${section.substring(0, 1).toUpperCase() +
      section.substring(1)}Beers`;

    this[handler](data);
    this.setPagesFetched(section, page);
  });
}

export default new MainStore();
