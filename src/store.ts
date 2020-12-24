import { createStore } from 'vuex'
const store = createStore({
    state: {
        count: 0
    }
})

// console.log('store', store.state.count)
export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
}

export default store