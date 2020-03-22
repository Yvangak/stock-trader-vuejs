<template>
  <div class="ui container app">
    <app-header></app-header>
    <div className="ui grid">
      <div className="ui row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
  .app {
    margin-top: 10px;
  }
</style>
