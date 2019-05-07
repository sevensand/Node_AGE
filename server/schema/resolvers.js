const Content = require('../models/content.model');

const resolvers = {
  Query: {
    contents: () => Content.find({})
  },
  Mutation: {
    addPost: (parent, post) => {
      const newPost = new POST({title: post.title, mirror: post.mirror});
      return newPost.save();
    }
  }
}

module.exports = resolvers;
