import { ref, h } from 'vue'
// named exports referencing variable declaration: ok
export default {
  props: {
    /* ... */
    msg: {
      type: String,
      default: '',
      required: true
    },
    // 类型检查 + 其他验证
    value: {
      type: Number,
      default: 0,
      required: true,
      validator: (value: number) => {
        return value >= 0
      }
    }
  },
  setup(props) {
    const count = ref(666)
    // 返回渲染函数
    // return () => h('div', props.msg + count.value + props.value)
    return () => <div>
      <h2>Vue tsx 渲染效果：</h2>
      <div>{props.msg + '$$$' + count.value + '¥¥¥' + props.value}</div>
    </div>
  }
}
