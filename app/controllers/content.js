import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        logout(){
            console.log('aqui entra')
            sessionStorage.clear();
            window.location.replace("/");
            console.log('paso')
        }
    }
});
