import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import Products from './Products';
import Product from './Product';
import EditProduct from './EditProduct';

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Products products={props.products} />} />
      <Route exact path="/create" render={(routeProps) => <CreateProduct history={routeProps.history} formSubmit={props.formSubmit} />} />
      <Route path="/edit/:id" component={EditProduct} />
      <Route exact path="/:id" render={(routeProps) => <Product handleProductDelete={props.handleProductDelete} history={routeProps.history} match={routeProps.match} />} 
      />
    </Switch>
  )
}

export default Router;