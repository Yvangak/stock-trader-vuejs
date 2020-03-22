import Vue from 'vue';
import Vuex from 'vuex';
import stockModule from './modules/stocksModule';
import portFolio from './modules/PortfolioModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stockModule,
        portFolio,
    },
});
