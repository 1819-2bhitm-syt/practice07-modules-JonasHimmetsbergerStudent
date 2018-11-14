const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

let password = 'abc';
let ciphertext = encrypt(password, 'Ich möchte diesen Text verschlüsselt haben');
decrypt(password, ciphertext);