import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

// app/controller/index.js
export default Controller.extend({
  moment: service(),
  actions: {
    changeDefaultFormat() {
      this.set('moment.defaultFormat', 'MM.DD.YYYY');
    }
  }
});