import { configureStore, createSlice } from '@reduxjs/toolkit'

import user from './store/userSlice.js'







// redux state 변경하는법 state수정해주는 함수를 만들고 원할 때 그 함수를 store.js에 요청
// 만든 함수를 export 해야함

let stock = createSlice({
    name: 'stock',
    initialState: '[10, 11, 12]'
})

let cart = createSlice({
    name: 'cart',
    initialState:
    [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },

    ],
    reducers : {
        addCount(state, action){
            let 번호 = state.findIndex((a)=> {return a.id === action.payload})
            state[번호].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let {addCount, addItem} = cart.actions




// state를 밑에다 등록해야 함
export default configureStore({
    reducer: {
        // 작명 : 스테이트.reducer
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer,
    }
})

