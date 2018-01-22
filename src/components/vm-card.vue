<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']">
    <div class="card-img">
      <img :src="src" alt="" :height="height">
      <div v-if="editable && type == 'vertical'" class="control">
        <span class="edit">
          <a :href="editUrl">
            <Icon type="edit"></Icon>
          </a>
        </span>
        <span class="delete">
          <Icon type="trash-b" @click="modalDelete=true"></Icon>
        </span>
      </div>
    </div>
    <div class="card-desc panel-body" v-if="showDetail">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a :href="detailUrl">
        more >
      </a>
    </div>
    <Modal
        v-model="modalDelete"
        title="Delete"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="deleteOk">
        Are you sure to delete this data?
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'VmCard',
    props: {
      height:{
        type:String,
        default:"100%"
      },
      showDetail:{
        type:Boolean,
        default:false,
      },
      type: {
        type: String,
        default: 'vertical'
      },
      editable: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Title'
      },
      src: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
      },
      detailUrl: {
        type: String,
        default: '#'
      },
      editUrl: {
        type: String,
        default: '#'
      }
    },
    data: function () {
      return {
        modalDelete: false
      }
    },
    methods: {
      deleteOk: function () {
        this.$emit('delete-ok')
      }
    }
  }
</script>
