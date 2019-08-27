<template>
  <div>
   
  </div>
</template>
<script>
import  loading from '../../base/loading/loading'
import { getSingerList} from "../../api/singer";
import { ERR_OK } from "../../api/config";
import Vue from "vue";
export default {
  components: {
    loading
  },
  data() {
    return {
      singerList: []
    };
  },
  methods:{
    formatSinger(list){
      let map={
        hot:{
          title:'热门',
          items:[]
        },
        key:[{
          index:'',
          items:''
        }]
      }
      list.forEach((item,index)=>{
        if(index<10){
          map.hot.items.push({
            id:item.Fsinger_mid,
            name:item.Fsinger_name
          })
        }
        let key=item.Findex
        if(!map[key])
         map.key.push({
           index:item.Findex,
           items:item.Fsinger_name
         })
      })
      return map
    }
  },
 created() {
   var that=this
    getSingerList().then(res => {
      if (res.code === ERR_OK) {
          console.log(res)
        that.singerList = res.data.list;
        console.log(that.formatSinger(that.singerList))
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';




</style>