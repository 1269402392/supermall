import {debounce} from './utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      refresh();
    }
    //发送全局事件
    this.$bus.$on("itemImageLoad", this.itemImgListener)
  }
}