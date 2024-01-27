const typeDefs =`
    type Tech{
        _id:ID!
        name: String!
    }

    type MatchUp{
        _id:ID!
        tech1: String!
        tech2: String!
        tech1_votes: Int
        tech2_votes: Int
    }

    type Query {
        tech: [Tech]
        matchups(_id: String): [MatchUp]
      }

    type Mutation{
        createMatchup (tech1:String , tech2:String): MatchUp
        createVote(_id: String!, techNum: Int!): MatchUp
    }

`;

module.exports = typeDefs;