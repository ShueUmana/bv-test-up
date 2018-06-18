import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        authenticate(){
            // get the values from form
            let { email, password } = this.getProperties('email', 'password');
            
            /**
             * get data from archive, retrieve data to search if the user exists.
             */
            $.getJSON( "/data/users.json", function() {
              })
                .done(function(data) {
                    if(typeof(data[email])!=='undefined'){
                        if(data[email]==password){
                            // create session store to authenticated
                            sessionStorage.setItem("user", email);
                            window.location.replace("/content"); 
                        }else{
                            $(".data-error").removeClass('hidden');
                        }
                    }else{
                        // sino esta alojado en el Json fue usuario nuevo, debe de estar en el localStorage
                        if (localStorage.getItem("user") === null) {
                            sessionStorage.setItem("user", email);
                            window.location.replace("/content");
                        }else{
                            $(".data-error").removeClass('hidden');
                        }
                    }
                })
                .fail(function() {
                  alert( "Sorry, we have an error with the server" );
                }) 
        } 
    }
});
