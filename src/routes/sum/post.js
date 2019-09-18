function sum(request, response) {
  const { numbers } = request.body

  const result = numbers.reduce((a, b) => a + b, 0)
  
  response.status(200).send({
    sum: result
  })
}

module.exports = sum