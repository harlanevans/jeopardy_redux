import axios from 'axios';


const CATEGORIES = 'CATEGORIES';
const ADD_CATEGORY = 'ADD_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Actions
// index
export const getCategories = () => {
  return (dispatch) => {
    axios.get('/api/categories')
    .then( res => dispatch({ type: CATEGORIES, categories: res.data }))
  }
}
// create
export const addCategory = (category) => {
  return (dispatch) => {
    axios.post('/api/categories', { category, })
    .then( res => dispatch({ type: ADD_CATEGORY, category: res.data }))
  }
}

// update
export const updateCategory = (category) => {
  return (dispatch) => {
    axios.put(`/api/categories/${category.id}`, { category })
    .then(res => dispatch({ type: UPDATE_CATEGORY, category: res.data }))
  }
}

// destroy
export const deleteCategory = (id) => {
  return (dispatch) => {
    axios.delete(`/api/categories/${id}`)
    .then(res => dispatch({ type: DELETE_CATEGORY, id, }))
  }
}


// Recuders

export default (state = [], action) => {
  switch (action.type) {
    case CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return [action.category, ...state];
    case UPDATE_CATEGORY:
      return state.map(category => {
        if (category.id === action.category.id)
        return action.category;
        return category;
      })
      case DELETE_CATEGORY:
      return state.filter(c => c.id !== action.id);
      default:
      return state;
  }
}
