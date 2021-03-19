import axiosAdapter from '../config';

export default {
    boot(){
        const activityId = window._query.activityId;
        return axiosAdapter.get('/api/backactivity/common/boot', {
            activityId,
            testMode: true
        })
    }
}