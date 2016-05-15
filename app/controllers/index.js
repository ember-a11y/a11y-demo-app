import Ember from 'ember';

// app/controller/index.js
export default Ember.Controller.extend({
  moment: Ember.inject.service(),
  actions: {
    changeDefaultFormat() {
      this.set('moment.defaultFormat', 'MM.DD.YYYY');
    }
  }
});