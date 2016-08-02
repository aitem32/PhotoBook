var User = require('../models/user').User;
var Album = require('../models/album').Album;
var Photo = require('../models/photo').Photo;

module.exports = function (req, res, next) {

    var editPhoto = req.params.id,
        album = req.params.album,
        name = req.body.edit_name_photo,
        info = req.body.addAlbumDesc,
        user = req.session.user;
    var searchRegExp = info.replace(/#\S+/g, "<a href='/search/$&'>$&</a>"); // Заменяем все слова, начинающиеся с # на ссылки

   // var R = r.replace(/#\S+/, "<a href='/photo$&'>$&</a>" );  // памятка по регэкспу

    User.findOne({album:album}, function (err, foundUser) {
        if (err) return next(err);

        if (foundUser._id == user){
            Photo.update({_id: editPhoto}, {
                    name:name,
                    info:searchRegExp
                },
                function (e) {
                    if (e) return next(e);
                    console.log('updating succeed');
                    res.sendStatus(200)
                });
        } else {
            res.sendStatus(403)
        }
    })
};