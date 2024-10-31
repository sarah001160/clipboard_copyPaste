document.addEventListener('DOMContentLoaded', () => {
  const obj = {
    data() {
      return {
        text: 'hello 這是要複製的文本內容',

      }
    },
    methods: {
      copyTxt(text) {
        if (navigator.clipboard) {
          // 使用 Clipboard API
          return navigator.clipboard.writeText(text).then(() => {
            alert('文本已複製到剪貼簿');
          }).catch(err => {
            alert('無法複製文本：', err)
            console.error('無法複製文本：', err);
          });
        }
      },
      getRef(tag) {
        const text = this.$refs[tag].textContent; // 原來有這種寫法 $refs[tag] 等同 $refs.text1 (tag代表近來的參數值text1)
        this.copyTxt(text); // 剪貼簿
      }
    },
    mounted() {
    }
  }
  const app = Vue.createApp(obj);
  app.mount('#app')

})


