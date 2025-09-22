import { ApolloServer } from 'apollo-server-express';
import express from 'express';

async function createApp() {
    const app=express();
    const server=new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start();

    server.applyMiddleware({app,path:"/graphql"});

    return app;
}


export default createApp;

