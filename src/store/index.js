import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: []
    },
    mutations: {
        //mutations唯一的目的就是修改state中的状态
        //mutations中每个人方法尽可能完成事件比较单一点，否则可能跟踪不确定
        addToCart(state, payLoad) {
            payLoad.count = 1;
            payLoad.checked = false;
            state.cartList.push(payLoad);
        },
        changeCartCount(state, payLoad) {
            payLoad.count++;
        }
    },
    actions: {
        addCart(content, payLoad) {
            return new Promise((reslove, reject) => {
                //判断payLoad添加的是否为新的商品
                let oldProduct = null;
                for (let item of content.state.cartList) {
                    if (item.iid === payLoad.iid) {
                        oldProduct = item;
                        content.commit("changeCartCount", oldProduct)
                        reslove('数量增加')
                    }
                }

                if (!oldProduct) {
                    content.commit("addToCart", payLoad)
                    reslove('新增商品')
                }
            })
        }
    },
    modules: {}
})