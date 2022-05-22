type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
}
type Query {
    thoughts: [Thought]
}
