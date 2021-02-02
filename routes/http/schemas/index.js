
module.exports = {
  type: "object",
  required: ["name", "mail", "pass"],
  allOf: [
    {
      properties: {
        name: {type: "string", pattern: "^[a-zA-Z]+$"},
        mail: {type: "string", pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"},
        pass: {type: "string", pattern: "^[0-9]+$"},
      },
      additionalProperties: false,
    },
  ],
  errorMessage: {
    properties: {
      name: "Некорректно введено имя, попробуйте вводить только буквы на английском!",
      mail: "Некорректный адрес электронной почты",
      pass: "Пароль должен состоять только из цифр",
    },
  },
}