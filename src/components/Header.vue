<template>
    <div class="ui large menu">
        <div class="item"><img src="/images/logo.png"> Stock Trader System</div>
        <router-link to="/"><a class="item">Home</a></router-link>
        <router-link to="/portfolio"><a class="item">Portfolio</a></router-link>
        <router-link to="/stocks"><a class="item">Stocks</a></router-link>
        <div class="right menu">
            <div class="ui dropdown item">
                Save And Load <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item">Save Data</a>
                    <a class="item">Load Data</a>
                </div>
            </div>
            <div class="item">
                <div class="ui primary basic button" :class="{negative: isLowFunds}">
                    Funds:<i class="dollar sign icon"></i> {{totalFunds}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            totalFunds() {
                const funds = this.$store.getters.funds;
                return funds.toLocaleString('en-GB');
            },
            isLowFunds(){
                const balance = this.$store.getters.funds;
                return (balance < 2000)? true : false;
            }
        },
    };
</script>