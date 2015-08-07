/**
 * Created by z003d7tk-e01 on 04.08.2015.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});