import React from 'react'
import App from './containers/App'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {render} from 'react-dom'
import {store, persistor} from './store/configureStore'

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);