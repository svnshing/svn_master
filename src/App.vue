<template>
  <div id="app">
    <navigator-bar></navigator-bar>
    <div style="height: 830px">
      <router-view/>
      <!--<router-view name="extra"/>-->
    </div>
  </div>
</template>

<script>
  import NavigatorBar from './public/NavigatorBar'
  export default {
    name: 'app',
    components:{NavigatorBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
