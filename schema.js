const { gql } = require('apollo-server');

const typeDefs = gql`


type Query {
    Articles: [ViewArticles]
    Article(id: ID!): Article
   
  }


type ViewArticles {
  id: ID,
  title: String,
  byline: String,
  published_date: String,
  media: [Media]

}

type Article {
  id: ID,
  url: String,
  title: String
  abstract: String,
  byline: String,
  media: [Media],
  source: String,
  published_date: String,
  updated: String,
  section: String,
  subsection: String
}

type Media {
  id: ID,
  caption: String,
  copyright: String,
  mediaMetadata: [MediaMetadata]

}

type MediaMetadata {
  url: String,
  height: Int,
  width: Int

}

  
`;

module.exports = typeDefs;