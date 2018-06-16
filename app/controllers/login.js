import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        authenticate(){
            let flag=0;
            // get the values from form
            let { email, password } = this.getProperties('email', 'password');
            
            /**
             * get data from archive, retrieve data to search if the user exists.
             */
            $.getJSON( "/data/users.json", function(data) {
              })
                .done(function(data) {
                    if(typeof(data[email]!='undefined')){
                        if(data[email]==password){
                            console.log('LoginSucces');
                            // create session store to authenticated
                            sessionStorage.setItem("user", email);
                            flag=1;
                        }
                    }else{ // sino esta alojado en el Json fue usuario nuevo, debe de estar en el localStorage
                        if (localStorage.getItem(user) === null) {
                            flag=1;
                        }
                    }
                    if(!flag){  // en caso de que los datos no sean encontrados, se controla el error
                        $(".data-error").removeClass('hidden');
                    }else{ // envio de success al contenido de la aplicacion
                        window.location.replace("/content");   
                    }
                })
                .fail(function() {
                  console.log( "Sorry, we have an error with the server" );
                }) 
        } 
    }
});
