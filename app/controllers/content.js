import Controller from '@ember/controller';
import $ from 'jquery';
export default Controller.extend({
    actions: {
        logout() {
            // control para borrado de la session,
            sessionStorage.clear();
            window.location.replace("/");
        },
        searchMailData() {
            // get data from form
            let { email } = this.getProperties('email');

            $.ajax({
                url: "http://www.beenverified.com/hk/dd/email?email=" + email,
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    // function to store data in localStorage 
                    if (localStorage.getItem("SearchHistoryBVTest") !== null) {
                        // add data to localStorage,
                        let searchhistory = JSON.parse(localStorage.getItem('SearchHistoryBVTest'));
                        searchhistory.push(data);
                        localStorage.setItem("SearchHistoryBVTest", JSON.stringify(searchhistory));
                    } else {  // first entry is empty, Creation
                        let firstObj = [data];
                        localStorage.setItem("SearchHistoryBVTest", JSON.stringify(firstObj));
                    }
                    window.location.replace("/response");
                }
            });
            /*
                        // post data to REST listener
                        $.post( "http://www.beenverified.com/hk/dd/email?email="+email, function() {})
                            .done(function(data) {
                                
                            })
                            .fail(function() {
                              alert( "ups, access-control-allow-origin, fix this option first" );
                            })*/
        }
    }
});
