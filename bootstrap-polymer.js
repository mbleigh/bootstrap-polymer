Polymer.Bootstrap = {
  Helpers: {
    classPrefixer: function(attribute, prefix, target) {
      var target = target || "el";
      var prefix = prefix + "-";
      var attribute = attribute;
      return function(oldValue) {
        if (oldValue && oldValue.length > 0) this.$[target].classList.remove(prefix + oldValue);
        if (this[attribute] && this[attribute].length > 0) {
          this.$[target].classList.add(prefix + this[attribute])
        }
      }
    },

    classToggler: function(attribute, className, target) {
      var target = target || "el";
      return function() {
        if (this[attribute]) {
          this.$[target].classList.add(className);
        } else {
          this.$[target].classList.remove(className);
        }
      }
    }
  }
}