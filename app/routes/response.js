import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let searchhistory =JSON.parse(localStorage.getItem('SearchHistoryBVTest'));
        let pos=(searchhistory.length)-1;
        if(typeof(params.id)!='undefined'){
            pos=params.id;
        }        
        return searchhistory[pos];
    }
});
