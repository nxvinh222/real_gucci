class UploadsController{
    upload(req, res){
        console.log(req.file)
        const path = "http://"+req.headers.host+`/images/${req.file.filename}`
        // console.log(req.headers.host)
        res.json({path})
    }
}


export default new UploadsController();