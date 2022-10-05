const blogpost = require('./blogpost');
const comment = require('./comment');
const user = require('./user');


blogpost.belongsTo(user, {
    foreignKey:'user_id',
});

comment.belongsTo(user,{
    foreginKey:'user_id'
});


module.exports = {blogpost, comment, user}