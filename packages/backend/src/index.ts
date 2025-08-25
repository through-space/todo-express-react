import dotenv from "dotenv";
// import { PrismaClient } from "@prisma/client";
import * as process from "node:process";
import { app } from "./app.js";
// import {prisma} from "../prisma/prismaClient";

dotenv.config({ path: "./../../.env" });
// process.exit();
const port = process.env.BE_PORT || 3000;

app.listen(port, () => {
	console.log(`Backend running on http://localhost:${port}`);
});
//

//
//
//
//
// export const prisma = new PrismaClient();
//
// const testPrisma = async () => {
// 	// const result1 =
// 	// 	await prisma.$queryRaw`INSERT into "User" (username, password) values ('test2', 'p2222') returning *`;
// 	// const result = await prisma.$queryRaw`SELECT * FROM "User" LIMIT 10`;
// 	// console.log(result);
// 	const res = await prisma.user.findMany();
// 	console.log(res);
// };
//
// testPrisma();
//
//
// app.listen(port, () => {
// 	console.log(`Backend running on http://localhost:${port}`);
// });
//
// // console.table(app);
