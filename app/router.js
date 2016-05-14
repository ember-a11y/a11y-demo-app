import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('examples', function() {
    this.route('input-helper', function() {});
    this.route('textarea-helper');
    this.route('link-to-helper', function() {
      this.route('photo-gallery');
    });
    this.route('aria-role');
  });
  this.route('addons', function() {
    this.route('power-select');  
  });
  
});

export default Router;
