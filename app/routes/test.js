import Ember from 'ember';

export default Ember.Route.extend({
    my_name:"Alex",
    showName:false,
    numClicks: 0,
    actions: {
        myToggleName() {
            this.toggleProperty('showName');
        },
        incrementClicks() {
            this.set('numClicks',this.get('numClicks')+1);
        },
        doAlert (message="I was clicked (default)") {
            window.alert(message);
        }
    }
});
 