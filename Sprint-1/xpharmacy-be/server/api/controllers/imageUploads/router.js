import * as express from 'express';
import controller from './controller';
import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({ //multers disk storage settings
    destination:'./public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      }
});

const upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 1024
    },
}).single('image')

export default express
    .Router()
    .post('/', (req, res, next) =>{
        upload(req, res, err => {
            if (err)
                console.log(err.field)
            next()
        })}, controller.upload)