const arr = [
  {
    keyword: 'errorMessage',
    dataPath: '/name',
    schemaPath: '#/errorMessage',
    params: { errors: [Array] },
    message: 'data.foo should be integer >= 2'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/mail',
    schemaPath: '#/errorMessage',
    params: { errors: [Array] },
    message: 'data.bar should be string with length >= 2'
  }
]

let newGogi = arr.map((el) => {
  return {
    inputName: el.dataPath.replace(/[^a-zA-Z ]/g, "."),
    errorText: el.message,
  }
});
console.log(newGogi)