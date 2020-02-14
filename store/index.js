import { createStore, applyMiddleware, compose } from 'redux'
import todoApp from '../reducers/index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const configureStore = initialState => {
    const enhancer = compose(
         applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
         ),
    );
    return createStore(todoApp, initialState, enhancer);
}

const store = configureStore({});

export default store