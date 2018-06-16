import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        authenticate(){
            let { email, password } = this.getProperties('email', 'password');
            
            $.getJSON( "/data/users.json", function(data) {
              })
                .done(function(data) {
                    if(typeof(data[email]!='undefined')){
                        if(data[email]==password){
                            console.log('LoginSucces');
                            sessionStorage.setItem("user", email);
                            window.location.replace("/content");
                        }
                    }
                })
                .fail(function() {
                  console.log( "Sorry, we have an error with the server" );
                }) 
        } 
    }
});
