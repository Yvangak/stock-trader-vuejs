import stocksData from '../../data/stocksData';

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RANDOM_STOCK'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },
};

const actions = {
    buyStock: ({commit}, order) => {
        // wanted to illustrate how we can commit mutations in different modules.
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        return commit('SET_STOCKS', stocksData);
    },
    randomizeStock: ({commit}) => {
        return commit('RANDOM_STOCK');
    },
};

const getters = {
    stocks: state => {
        return state.stocks;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
