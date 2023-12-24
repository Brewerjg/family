
const ImageController = require('../controllers/image.controllers'); 

module.exports = (app) => {
    app.get('/api/image', ImageController.AllImage);
    app.post('/api/image/new', ImageController.createImage);
    app.get('/api/oneimage/:id', ImageController.getOneImage);
    app.patch('/api/image/:id', ImageController.updateImage);
    app.delete('/api/delete/:id', ImageController.deleteImage);
}