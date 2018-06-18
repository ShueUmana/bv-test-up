import Component from '@ember/component';

export default Component.extend({
    actions:{
        logout(){
            // control para borrado de la session,
            sessionStorage.clear();
            window.location.replace("/");
        }
    }
});
