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
                    <div class="ui buttons">
                        <button class="ui positive basic button"><i class="save icon"></i>Save Data</button>
                        <div class="or" data-text="ou"></div>
                        <button class="ui primary basic button"><i class="sync icon"></i>Load Data</button>
                    </div>
                </div>
                <div class="column">
                    <div class="ui blue segment">
                        <div class="ui icon header">
                            <i class="money bill alternate outline icon"></i>
                            Your total Funds
                            <div class="ui horizontal divider">
                                is
                            </div>
                            <div class="ui circular segment">
                                <h2 class="ui header">
                                    Portfolio value
                                    <div class="sub header">{{portFolioTotalFunds | numberFormat}}</div>
                                </h2>
                            </div>
                            <div class="ui inverted circular segment">
                                <h2 class="ui inverted header">
                                    Balance Value
                                    <div class="sub header">{{totalFunds | numberFormat}}</div>
                                </h2>
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
            portFolioTotalFunds(){
                return this.$store.getters.portfolioValue;
            },
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
