import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {id:1,
            description:'Record Video'},
            {id:2,
            description:'Finish stuff'}
        ];
    }
});
