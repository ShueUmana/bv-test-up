import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        authenticate(){
            let { email, password } = this.getProperties('email', 'password');
            console.log(email);
            console.log(password);
        } 
    }
});
