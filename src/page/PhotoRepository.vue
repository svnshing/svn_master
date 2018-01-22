<template>
  <div class="vm-image-list">
    <Row class="image-list-heading vm-panel">
      <div class="panel-heading">
        {{ title }}
      </div>
      <Row type="flex" align="middle" justify="space-between" class="panel-body">
        <div class="search-bar">
          <Input placeholder="Please enter ..." v-model="keyword" style="width: 300px"></Input>
          <Button type="ghost" @click="search"><Icon type="ios-search-strong"></Icon></Button>
        </div>
        <Row type="flex" align="middle" class="page">
          <span>Show</span>
          <Input :max="40" :min="1" :number="true" v-model="showNum" class="input-number" @on-change=" updateDataShow "></Input>
          <span class="margin-end">/ Page</span>
          <span class="total">Total {{ data.length }}</span>
          <Page :total="data.length" :current="currentPage" :page-size="showNum" @on-change="pageChange"></Page>
        </Row>
      </Row>
    </Row>
    <Row class="image-list" :gutter="16">
      <Col :lg="6" :sm="12" class="vm-margin" v-for="item in dataShow" :key="item.id">
      <VmCard :src="item.src" height="300px" :showDetail=showDetail></VmCard>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
  .page{
    margin-left: 60%;
  }
</style>
<script>
  import VmCard from '@/components/vm-card'
  export default {
    name: 'PhotoRepository',
    components: {
      VmCard
    },
    data: function () {
      return {
        title:"全部照片",
        data:[],
        keyword: '', // keyword for search
        dataShow: [], // data for showing
        showNum: 8, // number of item per page
        currentPage: 1,
        showDetail:false,
      }
    },
    methods: {
      updateDataShow: function () {
        let startPage = (this.currentPage - 1) * this.showNum
        let endPage = startPage + this.showNum
        this.dataShow = this.data.slice(startPage, endPage)
      },
      pageChange: function (page) {
        this.currentPage = page
        this.updateDataShow()
      },
      search: function () {
        let that = this
        let tempData = that.data
        that.dataShow = []
        tempData.forEach(function (elem) {
          for (let i in elem) {
            if (elem[i].toString().indexOf(that.keyword) > -1) {
              that.dataShow.push(elem)
              return
            }
          }
        })
      },
      deleteOk: function (data) {
        this.$emit('delete-ok', data)
      }
    },
    watch: {
      data: function () {
        this.dataShow = this.data.slice(0, this.showNum) // update dataShow once data changed
      }
    },
    mounted: function () {
      for (let i = 1; i < 8; i++) {
        let displayPhoto = {
          id: i,
          src: require("@/assets/image/" + i + ".jpg"),
        }
        this.data.push(displayPhoto);
      }
      this.dataShow = this.data.slice(0, this.showNum)
    }
  }
</script>
