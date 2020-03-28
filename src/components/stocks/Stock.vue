<template>
    <div class="ui blue segment">
        <div class="ui grid">
            <div class="one wide column">{{index}}.</div>
            <div class="eight wide column">
                {{stock.name}}
                <span class="ui blue left pointing label">
                <i class="dollar sign icon"></i>{{stock.price}}
              </span>
            </div>
            <div class="four wide column">
                <div class="ui small icon input" :class="{error: isSufficientFunds}">
                    <input type="number" placeholder="Quantity" v-model.number="quantity">
                    <i class="shopping basket icon"></i>
                </div>
            </div>
            <div class="three wide column">
                <button class="ui positive basic button" @click="buyStock"
                        :disabled="isSufficientFunds || quantity <= 0 || !isInt(quantity)">
                    <i class="money bill alternate icon" v-if="!isSufficientFunds"></i>
                    {{isSufficientFunds?'Insufficient Funds':'Buy'}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['stock', 'index'],
        data() {
            return {
                quantity: 0,
            };
        },
        computed: {
            balance() {
                return this.$store.getters.funds;
            },
            isSufficientFunds() {
                return (this.quantity * this.stock.price) > this.balance;
            },
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                // using dispatch
                this.$store.dispatch('buyStock', order);
                this.$toaster.success('You have successfully bought '+ this.quantity+' stocks');
                this.quantity = 0;
            },
            isInt(quantity) {
                return this.quantity % 1 === 0;
            },
        },
    };
</script>
