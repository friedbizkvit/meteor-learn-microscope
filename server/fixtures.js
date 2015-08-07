/**
 * Created by z003d7tk-e01 on 04.08.2015.
 */
if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}