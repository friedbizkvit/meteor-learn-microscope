/**
 * Created by z003d7tk-e01 on 04.08.2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.map(function () {
    this.route('postsList', {path: '/'});

    this.route('postPage', {
        path: '/posts/:_id',
        data: function () {
            return Posts.findOne(this.params._id);
        }
    });
    this.route('postEdit', {
        path: '/posts/:_id/edit',
        data: function() { return Posts.findOne(this.params._id); }
    });
    this.route('/submit', {name: 'postSubmit'});
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction('loading');