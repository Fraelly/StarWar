// Send Request
exports.get = 'http://jsonplaceholder.typicode.com/todos'

// Send Request
exports.post = {
  url: 'http://jsonplaceholder.typicode.com/todos',
  data: {
    title: 'New Todo'
  }
}

exports.post = $ => ({
  url: '/signin',
  data: {
    email: $('email'),
    password: $('password')
  }
})
/*
Will request to https://myserver.com/signin 
with email, password and custom headers
*/

