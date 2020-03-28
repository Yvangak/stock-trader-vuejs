<template>
    <div class="ui large menu">
        <router-link to="/"><div class="item"><img src="/images/logo.png"> Stock Trader System</div></router-link>
        <router-link to="/portfolio"><a class="item">Portfolio</a></router-link>
        <router-link to="/stocks"><a class="item">Stocks</a></router-link>
        <div class="right menu">
            <div class="item">
                <div class="ui orange basic button" @click="endOfDay"> End Of Day</div>
            </div>
            <div class="item">
                <div class="ui primary basic button" :class="{negative: isLowFunds}">
                    Funds: {{totalFunds | numberFormat}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        computed: {
            totalFunds() {
                return this.$store.getters.funds;
            },
            isLowFunds() {
                const balance = this.$store.getters.funds;
                return (balance < 2000) ? true : false;
            },
        },
        methods: {
            ...mapActions({
                randomize: 'randomizeStock'
            }),
            endOfDay() {
                this.randomize();
                this.$toaster.info('End of the day performed successfully!')
            },
        },
    };
</script>