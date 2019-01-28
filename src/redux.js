 function createStore(reducer){
    let state = {};
    const subscribers = []
    
     const store = {
        getState() {
            return { ...state }
        },

        dispatch(action){
            state = reducer(state, action);

            for(const callback of subscribers) {
                callback(state)
            }
        },

        subscribe(callback){
            subscribers.push(callback)
        }
     }

     return store;
 }

 export { createStore }