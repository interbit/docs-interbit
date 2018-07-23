import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'

import {
  reducer as interbitReducer,
  createMiddleware as createInterbitMiddleware,
  rootSaga as interbitSaga
} from 'interbit-ui-tools'

import createSagaMiddleware from 'redux-saga'


const createStore = () => {
  // 1,2. Creating the middlewares
  const interbitMiddleware = createInterbitMiddleware()
  const sagaMiddleware = createSagaMiddleware()

  // 3. Including the reducers
  const reducers = combineReducers({
    interbit: interbitReducer,
    // ... other reducers
  })

  // 4. Including the middlewares
  const store = createStore(
    reducers,
    applyMiddleware(interbitMiddleware, sagaMiddleware)
  )

  // 5. Running the saga
  sagaMiddleware.run(interbitSaga)

  return store
}
