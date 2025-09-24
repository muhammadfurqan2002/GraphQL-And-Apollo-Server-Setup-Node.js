import userModel from "../../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authMiddleware from "../../middleware/auth.js";



const userResolver = {
  Query: {
    users: async (_,__, {user}) => {
      console.log(user);
      if(!user){
        throw new Error("Unauthorized");
      }
      return await userModel.find().sort({ createdAt: -1 });
    },
    user: async (parent, { id }) => {
      return await userModel.findById(id);
    },
  },

  Mutation: {

    registerUser:async(parent,{email,password,name})=>{
      const user = await userModel.findOne({ email });
      if (user) {
        throw new Error("User Already Exist");
      }
      const hashPassword=await bcrypt.hash(password,10);
      const newUser=await userModel.create({
        email,
        password:hashPassword,
        name
      })

      const token=jwt.sign({user:newUser},"yiuyre798764",{expiresIn:"1d"});

      return {user:newUser,token};
    },
    loginUser:async(parent,{email,password})=>{
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error("User Not Exist");
      }
      const isMatch=await bcrypt.compare(password,user.password);
      
      if(!isMatch){
        throw new Error("Invalid Credentials");
      }

      const token=jwt.sign({user:user},"yiuyre798764",{expiresIn:"1d"});

      return {user,token};
    },
    createUser: async (parent, { name, email }) => {
      const user = await userModel.findOne({ email });
      if (user) {
        throw new Error("User Already Exist");
      }
      return await userModel.create({
        email: email,
        name: name,
      });
    },
    updateUser: async (parent, { id, email, name }) => {
      const update = {};
      if (name !== undefined) update.name = name;
      if (email !== undefined) {
        const exist = await userModel.findOne({ email, _id: { $ne: id } });
        if (!exist) {
          throw new Error("Email is under used by someone else.");
        }
        update.email=email;
      }
      return await userModel.findByIdAndUpdate(id,update,{new:true});
    },
    deleteUser: async (parent, { id}) => {

        const user=await userModel.findByIdAndDelete(id);
        return user??false;
    },
  },
};

export default userResolver;
