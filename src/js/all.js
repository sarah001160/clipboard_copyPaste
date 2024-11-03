document.addEventListener('DOMContentLoaded', () => {
  const obj = {
    data() {
      return {
        text: 'hello 這是要複製的文本內容',
      }
    },
    methods: {
      copyTxt(html) {
        try {
          navigator.clipboard.write([
            new ClipboardItem({
              'text/html': new Blob([html], { type: 'text/html' }), //你正在處理的數據是 HTML 格式的內容，可以包含標籤、結構和樣式
              'text/plain': new Blob([html], { type: 'text/plain' }) // 你要寫入剪貼簿的資料類型是純文本
            })
          ]);
          alert('文本已複製到剪貼簿');
        } catch (err) {
          alert('無法複製文本：' + err.message);
          console.error('無法複製文本：', err);
        }
      },
      getRef(tag) {
        const text = this.$refs[tag].innerHTML; // 原來有這種寫法 $refs[tag] 等同 $refs.text1 (tag代表近來的參數值text1)
        this.copyTxt(text); // 剪貼簿
      }
    },
    mounted() {
    }
  }
  const app = Vue.createApp(obj);
  app.mount('#app')

})


