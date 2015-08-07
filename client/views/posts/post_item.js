/**
 * Created by z003d7tk-e01 on 04.08.2015.
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId == Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});