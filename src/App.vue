<template>
    <div class="ui container app">
        <app-header></app-header>
        <div className="ui grid">
            <div className="ui row">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header';

    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('initStocks');
        },
    };
</script>

<style>
    .app {
        margin-top: 10px;
    }

    .slide-enter-active {
        animation: slide-in 300ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 300ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translate(-30px);
            opacity: 0;
        }
        to {
            transform: translate(0px);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translate(0px);
            opacity: 1;
        }
        to {
            transform: translate(-30px);
            opacity: 0;
        }
    }

</style>
