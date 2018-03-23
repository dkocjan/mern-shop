import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

import NotFound from './components/NotFound';
import Home from './components/Products';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MainMenu from './components/MainMenu';
import Admin from './components/Admin';
import Product from './components/Product';
import Account from './components/Account';
import Category from './components/Category';
import Cart from './components/Cart';
import ErrorModal from './components/ErrorModal';

const API_URL = 'http://localhost:3000/api';
const ErrorHandler = console.error; // eslint-disable-line

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      error: '',
      errorModalOpen: false,
      isAdmin: true,
      currency: {
        name: 'PLN',
        countryCode: 'pl-PL',
      },
      filterText: '',
      cart: [
        {
          id: 2,
          amount: 4,
        },
        {
          id: 1,
          amount: 1,
        },
      ],
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    // Fetch categories
    axios
      .get(`${API_URL}/categories`)
      .then(res => {
        const categories = res.data.map(cat => cat);
        this.setState({ categories });
      })
      .catch(error => {
        ErrorHandler(`Error fetching data - ${error}`);
        this.setState({ error: error.message, errorModalOpen: true });
      });

    // Fetch products
    axios
      .get(`${API_URL}/products`)
      .then(res => {
        const products = res.data.map(prod => prod);
        setTimeout(() => {
          this.setState({ products });
        }, 1000);
      })
      .catch(error => {
        ErrorHandler(`Error fetching data - ${error}`);
        this.setState({ error: error.message, errorModalOpen: true });
      });
  }

  handleUserInput(filterText) {
    this.setState({ filterText });
  }

  handleErrorModalClose = () => this.setState({ errorModalOpen: false });

  render() {
    return (
      <Router>
        <Container>
          {/* Main menu */}
          <MainMenu
            categories={this.state.categories}
            cart={this.state.cart}
            isAdmin={this.state.isAdmin}
          />

          {/* Error Modal */}
          {this.state.errorModalOpen ? (
            <ErrorModal
              error={this.state.error}
              open={this.state.errorModalOpen}
              handleClose={this.handleErrorModalClose}
            />
          ) : (
            ''
          )}

          {/* Switch views */}
          <Switch>
            {/* Home */}
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  products={this.state.products}
                  currency={this.state.currency}
                  onUserInput={this.handleUserInput}
                  filterText={this.state.filterText}
                  {...props}
                />
              )}
            />
            {/* Product */}
            <Route
              exact
              path="/p/:name/:id"
              render={props => (
                <Product
                  API_URL={API_URL}
                  currency={this.state.currency}
                  {...props}
                />
              )}
            />
            {/* Cart */}
            <Route
              exact
              path="/cart"
              render={props => <Cart cart={this.state.cart} {...props} />}
            />
            {/* Category */}
            <Route
              exact
              path="/c/:name"
              render={props => (
                <Category
                  products={this.state.products}
                  currency={this.state.currency}
                  onUserInput={this.handleUserInput}
                  filterText={this.state.filterText}
                  {...props}
                />
              )}
            />
            {/* Account */}
            <Route exact path="/account" component={Account} />
            {/* Login */}
            <Route exact path="/login" component={LogIn} />
            {/* Signup */}
            <Route exact path="/signup" component={SignUp} />
            {/* Admin */}
            <Route
              exact
              path="/admin"
              render={props => (
                <Admin {...props} isAdmin={this.state.isAdmin} />
              )}
            />
            {/* Not found */}
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
