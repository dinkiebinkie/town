const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();

const instaClientId = process.env.INSTAGRAM_CLIENT_ID;
const instaAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const binkieId = process.env.BINKIE_ID;
const count = 9;
let score = 0;
console.log(instaAccessToken);

const typeDefs = gql`
  type Insta {
    id: ID
  }
  type Skill {
    title: String
  }
  type Query {
    skillz: [Skill]
    score: Int
    insta: [Insta]
  }

  type Mutation {
    increaseScore(score: Int): Int
  }
`;

const resolvers = {
  Query: {
    skillz: () => "Hello",
    score: () => score,
    insta: () => {
      http
        .get(
          `https://api.instagram.com/v1/users/self/media/recent?access_token=${instaAccessToken}&count=${count}`
        )
        .then(res => console.log(res));
    }
  },
  Mutation: {
    increaseScore: (root, { score: scoreArg }) => {
      score += scoreArg;
      return score;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
