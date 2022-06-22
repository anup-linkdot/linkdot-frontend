import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "../reducers/reducer";
// import reducer from "../reducers/list"
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'counter',
    storage,
}

const initialState = {};
const reducers = combineReducers({
    userReducer: reducer,
    // listReducer: listReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [thunk];

// const store = createStore(
//     reducers,
//     initialState,
//     applyMiddleware(...middleware)
// );

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store

// export default store;