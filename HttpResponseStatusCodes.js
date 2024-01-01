const HttpResponse = {
    // Informational responses - 1XX
    continue: {
        code: 100,
        text: 'Continue',
        category: 'Informational responses'
    },
    switchingProtocols: {
        code: 101,
        text: 'Switching Protocols',
        category: 'Informational responses'
    },
    processing: {
        code: 102,
        text: 'Processing',
        category: 'Informational responses'
    },
    earlyHints: {
        code: 103,
        text: 'Early Hints',
        category: 'Informational responses'
    },

    // Successful responses - 2XX
    ok: {
        code: 200,
        text: 'OK',
        category: 'Successful responses'
    },
    created: {
        code: 201,
        text: 'Created',
        category: 'Successful responses'
    },
    accepted: {
        code: 202,
        text: 'Accepted',
        category: 'Successful responses'
    },
    nonAuthoritativeInformation: {
        code: 203,
        text: 'Non-Authoritative Information',
        category: 'Successful responses'
    },
    noContent: {
        code: 204,
        text: 'No Content',
        category: 'Successful responses'
    },
    resetContent: {
        code: 205,
        text: 'Reset Content',
        category: 'Successful responses'
    },
    partialContent: {
        code: 206,
        text: 'Partial Content',
        category: 'Successful responses'
    },
    multiStatus: {
        code: 207,
        text: 'Multi-Status',
        category: 'Successful responses'
    },
    alreadyReported: {
        code: 208,
        text: 'Already Reported',
        category: 'Successful responses'
    },
    IMUsed: {
        code: 226,
        text: 'IM Used',
        category: 'Successful responses'
    },

    // Redirection messages - 3XX
    multipleChoices: {
        code: 300,
        text: 'Multiple Choices',
        category: 'Redirection messages'
    },
    movedPermanently: {
        code: 301,
        text: 'Moved Permanently',
        category: 'Redirection messages'
    },
    found: {
        code: 302,
        text: 'Found',
        category: 'Redirection messages'
    },
    seeOther: {
        code: 303,
        text: 'See Other',
        category: 'Redirection messages'
    },
    notModified: {
        code: 304,
        text: 'Not Modified',
        category: 'Redirection messages'
    },
    temporaryRedirect: {
        code: 307,
        text: 'Temporary Redirect',
        category: 'Redirection messages'
    },
    permanentRedirect: {
        code: 308,
        text: 'Permanent Redirect',
        category: 'Redirection messages'
    },

    // Client error responses - 4XX
    badRequest: {
        code: 400,
        text: 'Bad Request',
        category: 'Client error responses'
    },
    unauthorized: {
        code: 401,
        text: 'Unauthorized',
        category: 'Client error responses'
    },
    paymentRequiredExperimental: {
        code: 402,
        text: 'Payment Required Experimental',
        category: 'Client error responses'
    },
    forbidden: {
        code: 403,
        text: 'Forbidden',
        category: 'Client error responses'
    },
    notFound: {
        code: 404,
        text: 'Not Found',
        category: 'Client error responses'
    },
    methodNotAllowed: {
        code: 405,
        text: 'Method Not Allowed',
        category: 'Client error responses'
    },
    notAcceptable: {
        code: 406,
        text: 'Not Acceptable',
        category: 'Client error responses'
    },
    proxyAuthenticationRequired: {
        code: 407,
        text: 'Proxy Authentication Required',
        category: 'Client error responses'
    },
    requestTimeout: {
        code: 408,
        text: 'Request Timeout',
        category: 'Client error responses'
    },
    conflict: {
        code: 409,
        text: 'Conflict',
        category: 'Client error responses'
    },
    gone: {
        code: 410,
        text: 'Gone',
        category: 'Client error responses'
    },
    lengthRequired: {
        code: 411,
        text: 'Length Required',
        category: 'Client error responses'
    },
    preconditionFailed: {
        code: 412,
        text: 'Precondition Failed',
        category: 'Client error responses'
    },
    payloadTooLarge: {
        code: 413,
        text: 'Payload Too Large',
        category: 'Client error responses'
    },
    URITooLong: {
        code: 414,
        text: 'URI Too Long',
        category: 'Client error responses'
    },
    unsupportedMediaType: {
        code: 415,
        text: 'Unsupported Media Type',
        category: 'Client error responses'
    },
    rangeNotSatisfiable: {
        code: 416,
        text: 'Range Not Satisfiable',
        category: 'Client error responses'
    },
    expectationFailed: {
        code: 417,
        text: 'Expectation Failed',
        category: 'Client error responses'
    },
    imATeapot: {
        code: 418,
        text: 'I\'m a teapot',
        category: 'Client error responses'
    },
    misdirectedRequest: {
        code: 421,
        text: 'Misdirected Request',
        category: 'Client error responses'
    },
    unprocessableContent: {
        code: 422,
        text: 'Unprocessable Content',
        category: 'Client error responses'
    },
    locked: {
        code: 423,
        text: 'Locked',
        category: 'Client error responses'
    },
    failedDependency: {
        code: 424,
        text: 'Failed Dependency',
        category: 'Client error responses'
    },
    tooEarlyExperimental: {
        code: 425,
        text: 'Too Early Experimental',
        category: 'Client error responses'
    },
    upgradeRequired: {
        code: 426,
        text: 'Upgrade Required',
        category: 'Client error responses'
    },
    preconditionRequired: {
        code: 428,
        text: 'Precondition Required',
        category: 'Client error responses'
    },
    tooManyRequests: {
        code: 429,
        text: 'Too Many Requests',
        category: 'Client error responses'
    },
    requestHeaderFieldsTooLarge: {
        code: 431,
        text: 'Request Header Fields Too Large',
        category: 'Client error responses'
    },
    unavailableForLegalReasons: {
        code: 451,
        text: 'Unavailable For Legal Reasons',
        category: 'Client error responses'
    },

    // Server error responses - 5XX
    internalServerError: {
        code: 500,
        text: 'Internal Server Error',
        category: 'Server error responses'
    },
    notImplemented: {
        code: 501,
        text: 'Not Implemented',
        category: 'Server error responses'
    },
    badGateway: {
        code: 502,
        text: 'Bad Gateway',
        category: 'Server error responses'
    },
    serviceUnavailable: {
        code: 503,
        text: 'Service Unavailable',
        category: 'Server error responses'
    },
    gatewayTimeout: {
        code: 504,
        text: 'Gateway Timeout',
        category: 'Server error responses'
    },
    httpVersionNotSupported: {
        code: 505,
        text: 'HTTP Version Not Supported',
        category: 'Server error responses'
    },
    variantAlsoNegotiates: {
        code: 506,
        text: 'Variant Also Negotiates',
        category: 'Server error responses'
    },
    insufficientStorage: {
        code: 507,
        text: 'Insufficient Storage',
        category: 'Server error responses'
    },
    loopDetected: {
        code: 508,
        text: 'Loop Detected',
        category: 'Server error responses'
    },
    notExtended: {
        code: 510,
        text: 'Not Extended',
        category: 'Server error responses'
    },
    networkAuthenticationRequired: {
        code: 511,
        text: 'Network Authentication Required',
        category: 'Server error responses'
    }
};

module.exports = HttpResponse;
