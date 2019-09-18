function absoluteConverterMiddleware(request, response, next) {
    let { numbers } = request.body
    numbers = numbers.map(number => Math.abs(number))
    request.body.numbers = numbers
    next()
}

module.exports = absoluteConverterMiddleware
