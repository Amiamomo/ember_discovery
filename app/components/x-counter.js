import Ember from 'ember';

export default Ember.Component.extend({
    number: 12,
    actions: {
        increment() {
            this.set('number',this.get('number')+1);
        }
    }
});
