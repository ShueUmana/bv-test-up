import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        if (sessionStorage.getItem("user") === null) {
            this.transitionTo('login');
          }
    }
});
