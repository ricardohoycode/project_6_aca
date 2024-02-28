const User = require("../../models/User")

const userCreate = async () => {

  await User.create(
    {
      firstName: 'Ricardo',
      lastName: "Hoyos",
      email: "rimaylu@gmail.com",
      password: 'rimaylu1234',
      phone: '+123456789'
    }
  )

}

module.exports = userCreate