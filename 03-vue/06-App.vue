
  <!-- <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="increment">
      count: {{ state.count }}, 
      double: {{ state.double }},
      three：{{
        three
      }},
      refnum：{{ refnum }}
    </button>
  </div> -->


<script>
import {
  ref,
  reactive,
  computed,
  watchEffect,
  watch,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import HelloWorld from "./06-HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    //这里通过reactive使state成为相应状态（后面会详细介绍）
    const state = reactive({
      count: 0,
      //计算属性computed的使用更灵活了
      double: computed(() => state.count * 2),
    });

    //computed也可以单独拿出来使用
    const three = computed(() => state.count * 3);

    //ref跟reactive作用一样都是用来数据相应的，ref的颗粒度更小（后面详细对比）
    const refnum = ref();
    //这里的watchEffect只要里面的变量发生了改变就会执行,并且第一次渲染会立即执行,没有变化前后返回参数，无法监听整个reactive
    watchEffect(() => {
      refnum.value = state.count;
    });
    //watch里第一个参数是监听需要的变量，第二个是执行的回调函数，
    watch(refnum, (a, b) => {
      // console.log(a, b, 'watch,a,b');
    });

    //所有的方法里再也不需要用this了，这是很爽的
    function increment() {
      state.count++;
    }

    onUpdated(() => {
      console.log("onUpdated");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate1");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    console.log("setup");

    return {
      state,
      three,
      refnum,
      increment,
    };
  },
};
</script>

<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
