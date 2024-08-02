import express from 'express';
import {  Login, signUp } from '../controller/user.controller.js';

const userRouter=express.Router()

userRouter.post('/signup',signUp)
userRouter.post('/login',Login)


export default userRouter;