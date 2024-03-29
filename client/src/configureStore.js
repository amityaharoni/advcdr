import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import apiMiddleware from './middleware/apiMiddleware';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                apiMiddleware,
                routerMiddleware(history),
            ),
        ),
    )

    // Hot reloading
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store
}