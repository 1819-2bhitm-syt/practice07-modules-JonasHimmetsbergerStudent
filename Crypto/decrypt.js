/*function decrypt(password, ciphertext) {
    let passwort = password;
    let text = ciphertext;

    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', passwort);

    const encrypted = text;
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log('Entschlüsselter Text: ' + decrypted);
}
*/

function decrypt(password, ciphertext) {
    let passwort = password;
    let text = ciphertext;

    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', passwort);

    const encrypted = text;

    try {
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        try {
            decrypted += decipher.final('utf8');
            console.log(`Entschlüsselter Text:
${decrypted}
            `);
        } catch (err) {
            console.log('Error! Passwort falsch!');
        }
    } catch(err) {
        console.log('Error!');
    }
}

module.exports = decrypt;