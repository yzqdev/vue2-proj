<template>
  <div :class="classes" :style="styles" v-resize="setHeight" ref="dom">
    <div class="k-demo-main" ref="demo">
      <div class="k-content">
        <slot name="content"></slot>
      </div>
      <div class="k-desc">
        <a class="k-desc-title">{{title}}</a>
        <div class="k-desc-content">
          <slot name="desc"></slot>
        </div>
        <span class="k-code-expan" @click="toggle">
          {{textTip}}
        </span>
      </div>
    </div>
    <div class="k-demo-line"></div>
    <Collapse>
      <Code v-show="expand" ref="code" :lang="lang">
        <slot name="code"></slot>
      </Code>
    </Collapse>
  </div>
</template> 

<script>
import './demo.less'
import Code from '../code'
import Collapse from '@/components/collapse/collapse.js'
import resize from '@/directives/winScroll'
export default {
  directives: { resize },
  components: { Code, Collapse },
  name: 'Demo',
  props: {
    layout: { type: String, default: 'vertical' },
    title: String,
    lang: String,
  },
  data() {
    return {
      domHeight: 0,
      demoHeight: 0,
      expand: false,
    }
  },
  computed: {
    textTip() {
      return this.expand ? '收起代码' : '展开代码'
    },
    classes() {
      return ['k-demo', {
        [`k-demo-${this.layout}`]: this.layout
      }]
    },
    styles() {
      return this.layout == 'horizontal' ? { height: this.expand ? `${this.domHeight}px` : `${this.demoHeight}px` } : {}
    },
  },
  methods: {
    setHeight() {
      if (this.layout == 'horizontal') {
        this.domHeight = this.$refs.dom.scrollHeight
        this.demoHeight = this.$refs.demo.scrollHeight
      }
    },
    toggle() {
      this.expand = !this.expand
      // if (this.layout == 'vertical') {
      //   this.codeHeight = !this.expand ? 0 : 'auto';
      // }
      // console.log(this.$refs.code.$el.scrollHeight)
    }
  },
  mounted() {
    this.setHeight()
  }
}
</script>
