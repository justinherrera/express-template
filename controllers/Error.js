module.exports = (err, req, res) => {
    try {
        console.log('error middleware')
        if(err.name === 'ValidationError') {
            return err = handleValidationError(err, res)
        }
    } catch(err) {
        res.status(500).send('Unknown Error')
    }
}