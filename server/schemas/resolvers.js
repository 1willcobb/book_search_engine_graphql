const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    me: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },
  Mutations: {
    async addUser(parent, { username, email, password }) {
      const token = signToken(user);
      const user = await User.create({ username, email, password });

      return { token, user };
    },
  },
};

module.exports = resolvers;
