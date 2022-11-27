window.vueTooltip = {
  template: '<span class="tooltip"><span class="tooltip-inner">{{title}}</span><slot></slot></span>',
  props: {
    title: {
      type: String,
    },
  },
};
