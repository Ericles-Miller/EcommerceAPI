import express from "express";
import { router } from "./routers";
import 'reflect-metadata';


export const app = express();
app.use(express.json());


app.use(router);


