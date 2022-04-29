const App = Vue.createApp({
  data() {
    return {
      myNAME: 'Göktuğ',
      myAGE: 22,
      image: {
        src: 'https://ih1.redbubble.net/image.1146348559.5697/mp,840x860,gloss,f8f8f8,t-pad,1000x1000,f8f8f8.jpg',
        alt: 'arabbob',
        width: 200,
        height: 200,
      },
    };
  },
  methods: {
    getRandom() {
      return Math.random().toFixed(2);
    },
    updateValue(e) {
      this.myNAME = e.target.value;
    },
  },
}).mount('#exercise');
