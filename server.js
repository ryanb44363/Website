const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/check-password', (req, res) => {
    const password = req.body.password;
    
    // Save the password to a local file
    fs.appendFile('passwords.txt', `${password}\n`, (err) => {
        if (err) {
            console.error('Failed to save password:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Password saved successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
