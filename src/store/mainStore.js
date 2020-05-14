import { observable, action, computed, onBecomeObserved, toJS } from 'mobx';

class MainStore {
  @observable containerHeight = null;
  @observable activeTab = 0;
  @observable allBeers = {};
  @observable pizzaBeers = {};
  @observable steakBeers = {};
  @observable activeSection = 0;
  @observable pagesFetched = {
    all: 0,
    pizza: 0,
    steak: 0
  };
  @observable cartHeight = 1;
  @observable cartItems = {};
  @observable showModal = false;
  @observable activeBeer = null;

  @computed get basketTotal() {
    const val = Object.keys(this.cartItems).reduce((acc, key) => {
      const bla = toJS(this.cartItems);
      debugger;
      const { quantity, abv } = this.cartItems[key];
      return acc + quantity * abv;
    }, 0);
    return val.toFixed(2);
  }

  deleteCartItem = action('delete-cart-item', id => {
    const newVal = { ...this.cartItems };
    delete newVal[id];
    this.cartItems = newVal;
  });

  setQuantity = action('set-quantity', (id, val) => {
    debugger;
    const newVal = { ...this.cartItems };
    newVal[id].quantity = val;
    this.cartItems = newVal;
  });

  setActiveBeer = action('set-active-beer', obj => {
    this.activeBeer = obj;
  });

  setActiveBeerQuantity = action('set-active-beer-quantity', obj => {
    this.activeBeer = { ...this.activeBeer };
  });

  setShowModal = action('set-show-modal', bool => {
    this.showModal = bool;
  });

  addCartItem = action('add-cart-item', item => {
    let newItem;
    const existingItem = this.cartItems[item.id];
    if (existingItem) {
      newItem = { ...existingItem };
      newItem.quantity = existingItem.quantity + 1;
    } else {
      newItem = { ...item };
      newItem.quantity = 1;
    }

    this.cartItems = { ...this.cartItems, [item.id]: newItem };
  });

  setCartHeight = action('set-cart-height', val => {
    this.cartHeight = val;
  });

  setPagesFetched = action('set-pages-fetched', (name, page) => {
    this.pagesFetched = { ...this.pagesFetched, [name]: page };
  });

  setActiveSection = action('set-active-section', section => {
    this.activeSection = section;
  });

  setActiveTab = action('set-active-tab', activeTab => {
    this.activeTab = activeTab;
  });

  serializeById = arr => {
    const valMapById = {};
    arr.forEach(val => (valMapById[val.id] = val));
    return valMapById;
  };

  setAllBeers = action('set-all-beers', beers => {
    this.allBeers = { ...this.allBeers, ...this.serializeById(beers) };
  });

  setPizzaBeers = action('set-pizza-beers', beers => {
    this.pizzaBeers = { ...this.pizzaBeers, ...this.serializeById(beers) };
  });

  setSteakBeers = action('set-steak-beers', beers => {
    this.steakBeers = { ...this.steakBeers, ...this.serializeById(beers) };
  });

  setContainerHeight = action('set-container-height', height => {
    this.containerHeight = height;
  })

  fetchBeers = action('fetch-beers', async ({ section, page }) => {
    const queryObj = {};

    if (page) {
      queryObj.page = page;
    }

    if (section !== 'all') {
      queryObj.food = section;
    }

    const query = new URLSearchParams(queryObj).toString();
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
