
const resolvers = {

    Query: {

    Articles: async (_, __ , { dataSources }) => {

      return await (dataSources.nyTimesAPI.getArticles());
    },

    Article: async (_ , { id } , { dataSources }) => {
      
      return await (dataSources.nyTimesAPI.getArticle(id));
    }

  },

  Media: {
    
    mediaMetadata: (parent) => {
      return parent['media-metadata']

    }}
};
  
  module.exports = resolvers;