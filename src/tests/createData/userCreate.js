const User = require("../../models/User")

const userCreate = async () => {

  await User.create(
    {
      firstName: 'Fernando',
      lastName: "de Jesus",
      email: "fernando@gmail.com",
      password: 'fernando1234',
      phone: '+123456789'
    }
  )

}

module.exports = userCreate