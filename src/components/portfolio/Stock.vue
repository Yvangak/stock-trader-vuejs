<template>
    <div class="ui horizontal segments">
        <div class="ui blue segment">
            <p>
                <span class="ui blue right pointing label">Qty: {{stock.quantity}}</span>
                {{stock.name}} <i class="long arrow alternate right icon"></i>
                <i class="dollar sign icon"></i>{{stock.price}}
            </p>
        </div>
        <div class="ui blue center aligned segment ">
            <div class="ui small icon input" :class="{error: !isQuantityAvailable}">
                <input type="number" placeholder="Quantity" v-model.number="quantity">
                <i class="shopping basket icon"></i>
            </div>
        </div>
        <div class="ui blue center aligned segment">
            <button class="ui primary basic button" @click="sellStocks" :disabled="quantity <= 0 || !isQuantityAvailable">
                <i class="money bill alternate icon" v-if="isQuantityAvailable"></i> {{isQuantityAvailable?'Sell': 'Insufficient Qty'}}
            </button>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock', 'index'],
        data() {
            return {
                quantity: 0,
            };
        },
        computed: {
            isQuantityAvailable(){
                return this.quantity <= this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock',
            }),
            sellStocks() {
                const order = {
                    stockId: this.stock.id,
                    quantity: this.quantity,
                    stockPrice: this.stock.price,
                };
                this.placeSellOrder(order);
                this.$toaster.success('You have successfully sold '+ this.quantity+' stocks');
                this.quantity = 0;
            },
            isInt() {
                return this.quantity % 1 === 0;
            },
        },
    };
</script>