import React from 'react';
import { connect, } from "react-redux";
import { Route, } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import { getCategories, } from "../reducers/categories";

class FetchCategories extends React.Component {


  render() {
    return(
      <div>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={Category} />
        </div>
    )
  }
}
export default FetchCategories;
