import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let searchhistory =JSON.parse(localStorage.getItem('SearchHistoryBVTest'));
        return searchhistory;
    }
});
