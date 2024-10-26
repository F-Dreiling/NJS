exports.logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

exports.loggerFull = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date()
    console.log(method, url, time)
    next()
}

exports.authorize = (req, res, next) => {
    console.log('Authorizing')

    const { user } = req.query

    if(user === 'felix') {
        req.user = { name: 'felix', id: 3}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}