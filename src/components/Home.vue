<template>
    <div class="ui placeholder segment">
        <div class="ui two column stackable center aligned grid">
            <div class="ui vertical divider"></div>
            <div class="middle aligned row">
                <div class="column">
                    <div class="ui icon header">
                        <i class="building icon"></i>
                        Trade or View Your Portfolio
                    </div>
                    <div class="ui info message">
                        <div class="header">
                            You may Save & Load your data
                        </div>
                        <p>Click on <b>End of Day</b> to begin a new day!</p>
                    </div>
                </div>
                <div class="column">
                    <div class="ui blue segment">
                        <div class="ui icon header">
                            <i class="money bill alternate outline icon"></i>
                            Your total Funds is
                            <div class="sub header">
                                <div class="ui positive button" :class="{negative: isLowFunds}">
                                    {{totalFunds | numberFormat}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            totalFunds() {
                return this.$store.getters.funds;
            },
            isLowFunds() {
                const balance = this.$store.getters.funds;
                return (balance > 2000) ? false : true;
            },
        },
    };
</script>
