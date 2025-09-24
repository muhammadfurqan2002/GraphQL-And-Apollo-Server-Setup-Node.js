import userResolver from "./resolvers/userResolver.js";
import userType from "./typeDefs/userType.js";


const typeDefs=[userType];
const resolvers=[userResolver];

export{
    typeDefs,
    resolvers
}