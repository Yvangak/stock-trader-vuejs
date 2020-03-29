import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json').then(response => response.data).then(data => {
        if (data) {
            const stocks = data.stocks;
            const portFolioStocks = data.portfolio;
            const funds = data.balance;

            const portfolio = {
                funds,
                portFolioStocks,
            };

            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    });
};