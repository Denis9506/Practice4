export const popup = {
  props: ['title', 'fullscreen'],
  data() {
    return {
      active: 0,
      top: 0,
      widthVal: '500px',
      left: '50%',
      height: 'auto'
    };
  },
  watch: {
    active(o, n) {
      if (o == 1 && !this.fullscreen) {
        setTimeout(() => {
          let height = this.$refs.popup.clientHeight / 2;
          this.top = `calc(44% - ${height}px)`;
        }, 10);
      }
      
      if (this.fullscreen) {
        this.top = 0;
        this.widthVal = '100%';
        this.left = 0;
        this.height = '100%';
      }
    }
  },
  template: `
    <template v-if="active == 1">
      <div class="popup-back"></div>
      <div class="popup" :class="fullscreen ? 'fullstandart' : 'standart'" 
           :style="{ top: top, 'max-width': widthVal, left: left, height: height }" ref="popup">
        <div class="flex head-popup">
          <div class="w80 ptb20">
            <div class="head-title">{{ title }}</div>
          </div>
          <div class="w20 ptb20 left-wc">
            <a href="#" @click.prevent="active = 0">
              <i class="fas fa-window-close"></i>
            </a>
          </div>
        </div>
        <div class="popup-inner">
          <slot/>
        </div>
      </div>
    </template>
  `
};
