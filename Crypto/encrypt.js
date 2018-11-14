function encrypt(password, plaintext) {
    let passw = password;
    let texttosecret = plaintext;

    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', passw);

    console.log(`Text:
${texttosecret}
    `);

    let encrypted = cipher.update(texttosecret, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    console.log(`Verschlüsselter Text: 
${encrypted}
    `);

    return encrypted;
}

module.exports = encrypt;