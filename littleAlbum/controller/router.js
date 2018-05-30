const file = require('../models/file.js');

exports.showIndex = (req,res) => {
    file.getAllAlbums(function(allAlbum) {
        res.render('index',{
            albums : allAlbum
        })
    })
}

exports.showAlbum = (req,res,next) => {
    var albumName = req.params['albumName'];

    file.getAllImagesByAlbumName(albumName,function(error,allImages) {
        if(error) {
            next();
            return;
        }
        res.render('album',{
            'albumName':albumName,
            'images':allImages
        })
    })

}