require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dma1bp75m',
    api_key: '676713619825456',
    api_secret: 'MW_-ghRjTgx36pvkr9fCr8amm7o',
});

module.exports = cloudinary ;