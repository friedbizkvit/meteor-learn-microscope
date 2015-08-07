/**
 * Created by z003d7tk-e01 on 05.08.2015.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};