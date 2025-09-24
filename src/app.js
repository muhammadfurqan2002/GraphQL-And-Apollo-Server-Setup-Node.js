import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import {typeDefs,resolvers} from '../src/graphql/schema.js'
import authMiddleware from './middleware/auth.js';
async function createApp() {
    const app=express();
    const server=new ApolloServer({
      typeDefs,
      resolvers,
      context:({req})=>{
        const user=authMiddleware(req);
        return {user};
      }
    })
    await server.start();

    server.applyMiddleware({app,path:"/graphql"});

    return app;
}


export default createApp;

