import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {booksReducer} from './reducers'
import { loadState, saveState } from './localStorage'

const rootReducer = combineReducers({
    library: booksReducer,    
    form: formReducer
  })
const persistedState = loadState();
const store = createStore(rootReducer,persistedState)

store.subscribe(()=>{
  saveState({
    library: store.getState().library
  })
})

export default store;
