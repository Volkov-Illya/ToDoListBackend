
module.exports = {
    getAll: getAll
};


function getAll(req, res) {
    console.log('here');
    res.send('Hello from controller');
}