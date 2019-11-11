import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import Products from './Products';


const Router = (props) => {
  console.log(props)
  console.log('in router')
  return (
    <Switch>
      <Route exact path="/" render={() => <Products products={props.products} />} />
      <Route path="/create" render={(routeProps) => <CreateProduct history={routeProps.history} formSubmit={props.formSubmit} />} />
    </Switch>
  )
}

export default Router;