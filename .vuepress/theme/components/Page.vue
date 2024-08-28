<template>
  <main class="page">
    <slot name="top" />
      <div class="content">
          <div style="width:100%">
              <Content class="theme-default-content custom-content"  />
              <PageEdit style="margin: 0"/>
              <!--      <div class="option-box-toc-fixed">-->
              <!--         -->
              <!--      </div>-->


              <PageNav v-bind="{ sidebarItems }" />
          </div>

          <div class="toc-container-sidebar" ref="tocc">
              <div class="pos-box">
                  <div class="icon-arrow"></div>
                  <div class="scroll-box" style="max-height:86vh">
                      <div class="toc-box">
                          <PageSidebarToc :depth="0" :items="pageSidebarItems" :sidebarDepth="6"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    <slot name="bottom" />

  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageSidebarToc from '@theme/components/PageSidebarToc.vue'
export default {
  components: { PageEdit, PageNav, PageSidebarToc },
  props: ['sidebarItems', 'pageSidebarItems'],
  mounted() {
    console.log(this.$site,this, 'this.$site')
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'


@media (max-width: 1435px)
  .toc-container-sidebar
    display none !important

@media (max-width: $MQMobile)
  .toc-container-sidebar
    display none
.content-page
  position relative
.custom-content
  padding-right 16px !important
.content
  display flex
  justify-content space-around
  margin 0 auto
  li, a , p, span
    word-wrap break-word
.theme-default-content
  margin 0 !important

.page
  display block
  position relative
  //height 100vw
  //width 100vw
  //overflow scroll
.toc-container-sidebar
  order 2
  width 100%
  flex-grow 1
  //padding-left 32px
  display: block;
  position: relative;
  color $textColor
  //: calc(100vw - 460px);
  top: 80px;
  max-width: 240px;
  background transparent
  margin-right: 90px;
  margin-left: 0px;

  .on
    display: block;
  .pos-box
    position: fixed;
    padding: 16px;
    top 45px;
    height 100vh
    overflow-x hidden
    overflow-y auto

    .icon-arrow
      position: relative;
      margin-left: -20px;
    .scroll-box
      overflow-x: hidden;
      overflow-y: hidden;

      hr
        margin-top: 0.5rem
      .toc-box
        border-left: 3px solid #f5f5f5;
        max-height:81vh;
        overflow-y: auto;
        overflow-x: hidden;
        min-width: 0;
        width: 259px;
        padding-right: 16px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

</style>
<style>
  /* 设置滚动条的宽度 */
  .toc-box::-webkit-scrollbar {
    width: 2px;
  }


</style>
