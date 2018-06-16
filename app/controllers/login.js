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
                    }else{
                        if (localStorage.getItem(user) === null) {
                            flag=1;
                        }
                    }
                    if(!flag){
                        $(".data-error").removeClass('hidden');
                    }else{
                        window.location.replace("/content");   
                    }
                })
                .fail(function() {
                  console.log( "Sorry, we have an error with the server" );
                }) 
        } 
    }
});
