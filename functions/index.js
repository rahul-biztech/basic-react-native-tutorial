const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const UUID = require('uuid-v4');

const gcConfig = {
    projectId: 'reactnative-app-321ae',
    keyFilename: 'reactnative-app.json'
};
const gcs = require('@google-cloud/storage')(gcConfig);

exports.storeImage = functions.https.onRequest((request, response) => {
    console.log("rv911- Export Image to Firebase");
    cors(request, response, () => {
        const body = JSON.parse(request.body);
        fs.writeFileSync('/tmp/upload-image.jpg', body.image, 'base64', err => {
            console.log(err);
            return response.status(500).json({ error: err });
        });
        const bucket = gcs.bucket('reactnative-app-321ae.appspot.com');
        const uuid = UUID();

        bucket.upload('/tmp/upload-image.jpg', {
            uploadType: 'media',
            destination: '/places/' + uuid + '-rv911.jpg',
            metadata: {
                metadata: {
                    contentType: 'image/jpeg',
                    firebaseStorageDownloadTokens: uuid
                }
            }
        }, (err, file) => {
            console.log("rv911- File: " + file);
            if (!err) {
                return response.status(201).json({
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/'
                        + bucket.name
                        + '/o/'
                        + encodeURIComponent(file.name)
                        + '?alt=media&token='
                        + uuid
                });
            } else {
                console.log("rv911- Store Image: " + err);
                response.status(500).json({ error: err });
            }
        })
    });
});
