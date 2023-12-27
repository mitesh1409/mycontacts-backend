const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    let errTitle = '';

    switch(statusCode) {
        case 400:
            errTitle = 'Validation Failed';
            break;

        case 404:
            errTitle = 'Not Found';
            break;

        default:
            errTitle = 'Internal Server Error';
            break;
    }

    res.status(statusCode)
        .json({
            title: errTitle,
            message: err.message,
            stackTrace: err.stack
        });
};

module.exports = errorHandler;
