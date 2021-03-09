const crypto = require('crypto');
const got = require('got');
const config = require('./config');

const encryptPassword = async(password) => {
        const got = require('got');
        const { body } = await got.get('http://app.etiquetaselectronicas.com:9999/user/getErpPublicKey', {
        });
        let publicKey=`-----BEGIN PUBLIC KEY-----\n${JSON.parse(body).data}\n-----END PUBLIC KEY-----`;
        let buffer = Buffer.from(password);
        return crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer).toString("base64");
    };

exports.encryptPassword = encryptPassword;