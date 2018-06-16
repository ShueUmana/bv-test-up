import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        newUser(){
            // get the values from form
            let { email, password } = this.getProperties('email', 'password');
            localStorage.setItem(email, password);
            sessionStorage.setItem("user", email);
            window.location.replace("/content");        } 
    }
});
