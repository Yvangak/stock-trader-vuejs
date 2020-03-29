import Vue from 'vue';
import Vuex from 'vuex';
import stockModule from './modules/stocksModule';
import portFolio from './modules/PortfolioModule';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stockModule,
        portFolio,
    },
});
