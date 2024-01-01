const HttpResponse = require('../HttpResponseStatusCodes');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode
        ? res.statusCode
        : HttpResponse.internalServerError.code;
    let errTitle = '';

    switch(statusCode) {
        case HttpResponse.badRequest.code:
            errTitle = 'Validation Failed';
            break;

        case HttpResponse.notFound.code:
            errTitle = 'Not Found';
            break;

        case HttpResponse.unauthorized.code:
            errTitle = 'Unauthorised';
            break;

        case HttpResponse.forbidden.code:
            errTitle = 'Forbidden';
            break;

        case HttpResponse.internalServerError.code:
            errTitle = 'Internal Server Error';
            break;

        default:
            console.log('No errors! All good :)');
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
