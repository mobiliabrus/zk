const component = {
  props: {
    title: {
      type: String,
    },
  },
};

component.template =
  '<div class="badge"><div v-if="title" class="badge-title">{{ title }}</div><div class="badge-content"><slot></slot></div></div>';

window.vueBadge = component;
