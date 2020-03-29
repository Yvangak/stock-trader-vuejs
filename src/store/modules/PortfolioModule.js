const state = {
    funds: 10000,
    portFolioStocks: [],
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.portFolioStocks.find(
                element => element.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.portFolioStocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= (stockPrice * quantity);
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.portFolioStocks.find(
                element => element.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.portFolioStocks.splice(state.portFolioStocks.indexOf(record),
                    1);
        }
        state.funds += (stockPrice * quantity);
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.portFolioStocks = portfolio.portFolioStocks ?
                portfolio.portFolioStocks :
                [];
    },
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    },
};

const getters = {
    funds(state) {
        return state.funds;
    },
    portfolioValue(state, getters) {
        let totalFunds = 0;
        state.portFolioStocks.forEach(stock => {
            const record = getters.stocks.find(
                    element => element.id === stock.id);
            totalFunds = totalFunds + stock.quantity * record.price;
            return totalFunds;
        });
        return totalFunds;
    },
    stockPortfolio(state, getters) {
        return state.portFolioStocks.map(stock => {
            const record = getters.stocks.find(
                    element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};


