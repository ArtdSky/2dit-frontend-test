const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/task1', express.static(path.join(__dirname, 'task1')));
app.use('/task2', express.static(path.join(__dirname, 'task2')));
app.use('/task3', express.static(path.join(__dirname, 'task3')));
app.use('/task4', express.static(path.join(__dirname, 'task4')));
app.use('/task5', express.static(path.join(__dirname, 'task5')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
