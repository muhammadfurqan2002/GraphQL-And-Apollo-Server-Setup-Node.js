const userResolver={
    Query:{
        getUser:()=>{
            return "This is Query";
        }        
    },

    Mutation:{
        // createUser:(parent,args)=>{
        createUser:(parent,{name})=>{
            return {name};
        }
    }
}



export default userResolver;