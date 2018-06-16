import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        logout(){
            // control para borrado de la session,
            sessionStorage.clear();
            window.location.replace("/");
        }
    }
});
