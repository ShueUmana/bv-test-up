import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let searchhistory =JSON.parse(localStorage.getItem('SearchHistoryBVTest'));
        return searchhistory[(searchhistory.length)-1];
    }
});
