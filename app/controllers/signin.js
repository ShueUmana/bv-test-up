import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        newUser(){
            // get the values from form
            let { email, password } = this.getProperties('email', 'password');
            // creacion de un local para almacenar nuevo usuario
            localStorage.setItem(email, password);
            // creacion de un session para la session del usuario
            sessionStorage.setItem("user", email);
            // redireccion para el contenido de la pagina.
            window.location.replace("/content");        } 
    }
});
