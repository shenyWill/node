const fs = require('fs');

exports.getAllAlbums = function(callback){
    fs.readdir('./uploads',(error,file) => {
        let allAlbums = [];
        (function iterator(i) {
            if(i == file.length) {
                callback(allAlbums);
                return;
            }
            fs.stat('./uploads/' + file[i],(error,stats) => {
                if(stats.isDirectory()) {
                    allAlbums.push(file[i])
                }
                iterator(i+1)
            })
        })(0)
    })
}

exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir('./uploads/' + albumName,function(error,file) {
        if(error) {
            callback('没有相应相册',null)
            return
        }
        let allImageArr = [];
        file = file || [];
        (function iterator(i){
            if(i == file.length) {
                callback(null,allImageArr);
                return;
            }
            fs.stat('./uploads/' + albumName +'/'+ file[i],(error,stats) => {
                if(error) {
                    callback('没有读取到响应图片',null)
                    return;
                }
                if(stats.isFile()) {
                    allImageArr.push('/' + albumName +'/'+ file[i])
                }
                iterator(i+1)
            })
            
        })(0)
    })
}