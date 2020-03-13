const mixin = {
  props: {
    size: {
      type: [Number, String],
      default: 16
    }
  },
  // objClass: function() {
  //     return {
  //         button: true,
  //         unit: this.unit,
  //         radius: this.radius,
  //         click: this.click
  //     };
  // },
  computed: {
    objStyle: function() {
      return {
        height: this.size + "px",
        width: this.size + "px",
        "border-radius": (this.radius ? this.size / 2 : this.size / 4) + "px"
      };
    }
  }
};

export default mixin;
