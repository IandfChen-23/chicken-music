<template>
    <div>
    
        <child-a></child-a>
        <child-b></child-b>
        <child-c></child-c>
    </div>
</template>
<script>
import Vue from 'vue'
var Event=new Vue();
const childA={
    template:'<div><button @click="aToC" >传递值给c</button></div>',
    data() {
        return {
            name:'a'
        }
    },
    methods: {
        aToC(){
            Event.$emit('a-to-c',this.name)
        }
    },
}
const childB={
    template:'<div><button @click="bToC" >传递值给c</button></div>',
    data() {
        return {
            age:20
        }
    },
    methods: {
        bToC(){
            Event.$emit('b-to-c',this.age)
        }
    },
}
const childC={
    template:'<div>{{name}}{{age}}</div>',
    data() {
        return {
            name:'',
            age:''
        }
    },
    mounted() {
        Event.$on('a-to-c',name=>{
            this.name=name
        }),
        Event.$on('b-to-c',age=>{
            this.age=age
        })
 }
}
export default {
    components:{
        childA,
        childB,
        childC
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>