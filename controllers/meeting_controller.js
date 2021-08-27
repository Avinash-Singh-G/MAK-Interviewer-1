const { v4: uuidV4 } = require('uuid')

module.exports.createRoomId = function(req,res){
    if(req.isAuthenticated){
        res.redirect(`/meet/room/${uuidV4()}`);
    }else{
        return res.redirect('/users-sign-in');
    }
}

module.exports.enterRoom = function(req,res){
    if(req.isAuthenticated){
        return res.render('editor/editor.ejs',{roomId : req.params.roomId});
    }
}