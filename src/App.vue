<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        margin-top 60px
  
    table
        width 70vw
        margin 10px auto
        border 1px solid #aaaaaa
      
    th
    td
        border 1px solid #cccccc
    
    tr td:nth-child(2)
        font-family monospace
  
    tr td:nth-child(3)
        font-weight bold
        padding 20px
</style>
