import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('todos', function() {
    this.route('show',{path: '/:id'});
  });
  this.route('test');
  this.route('more-test');
});

export default Router;
 