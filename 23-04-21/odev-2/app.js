const app = Vue.createApp({
  data() {
    return {
      value: '',
    };
  },
  methods: {
    getAlert() {
      alert('Alert Gösterildi');
    },
    getValue(e) {
      this.value = e.target.value;
      console.log(e.target.value);
    },
  },
});
app.mount('#exercise');
