const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config()


class NYTimesAPI extends RESTDataSource {

  
  constructor() {

    super();
    // the NY Times Most Popular Articles catalog is hosted on this server
    this.baseURL = "https://api.nytimes.com/svc/mostpopular/v2/viewed";
    
  }

  async getArticles() {
    // const data = await this.get(`/7.json?api-key=${process.env.API_KEY}`);
    const data = await this.get("/7.json?api-key=casFtPVjJwRwKcdt7qVOqefVQIqv7VjY");
    const articles = data.results;

    return articles;
  }

  async getArticle(id) {
    const data = await this.get("/7.json?api-key=casFtPVjJwRwKcdt7qVOqefVQIqv7VjY");
    const articles = data.results
      return articles.find(article => article.id == id)
    }
  



}

module.exports = NYTimesAPI;

// https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=casFtPVjJwRwKcdt7qVOqefVQIqv7VjY