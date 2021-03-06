import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signin');
  this.route('content');
  this.route('response');
  this.route('history');
  this.route('response', { path: 'response/:id' });
});

export default Router;
