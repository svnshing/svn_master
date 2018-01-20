<template>
  <nav class="navbar navbar-default navbar-fixed-top" style="background-color: black;border-bottom-color: black;">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <span style="font-size: larger;color: white">自制相册</span>
        <span class="version">1.0.0</span>
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav nav-pills">
        <li v-for="(item,index) in navigateList" class="navigate-item"  @click.stop = "changeSelected($event,item)" role="presentation" :class="{'active':item.path === selectedPathName}">
          <router-link :to="{name:item.path}" :id="item.id" >
            <Icon :type="item.iconClass" style="padding-right: 5px;font-size: 18px"/>
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
    export default {
        name: "navigator-bar",
        data(){
          return {
            selectedPathName:"",
            navigateList:[
              {id:1,name:"首页",path:"WelcomePage",iconClass:"home"},
              {id:2,name:"相片",path:"PhotoRepository",iconClass:"ios-albums"},
              {id:3,name:"管理",path:"PhotoManager",iconClass:"edit"},
            ]
          }
        },
      computed:{
      },
      methods:{
        changeSelected($event,item){
          this.selectedPathName = item.path;
        }
      },
      created(){
           let mather = /\/\w+\s*$/.exec(location.href);
           let componentName;
           if(mather && mather[0]){
             componentName = mather[0].substring(1,mather[0].length);
           }
          else componentName = "WelcomePage";
          this.selectedPathName = componentName;
      }
    }
</script>

<style scoped>
  .version{
    font-size: 14px;
    font-style: italic;
    margin: -13px 0 0 48px;
    position: absolute;
    color: white;
  }
  .navbar-brand{
    cursor: default;
  }
  .navigate-item{
    padding: 4px;
    margin-left: 100px;
  }
  /*.active{
    background-color: black;
  }
  .skin-1{
    background: skyblue;
    background-image: none;
  }
  li{
    list-style-type: none;
    cursor: pointer;
  }
  header{
    top: 0;
    left: 0;
    position: absolute;
  }
  #logoGroup{
    !*width: 105px;*!
    margin: 10px 0px 0px 80px;
    cursor: default;
    font-size: 22px;
    text-shadow: white 0 0 0;
    float: left;
  }
  ul li{
    display: inline-block;
    padding: 0px 20px 0px 20px;
  }*/
</style>
