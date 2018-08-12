// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue';
import GmapCustomMarker from './gmap-custom-marker.vue';

Vue.config.productionTip = false;

module.exports = {
  install: function(Vue, options) {
    Vue.component('gmap-custom-marker', require(GmapCustomMarker));
  }
};
