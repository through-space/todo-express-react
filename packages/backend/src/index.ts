import dotenv from "dotenv";
import * as process from "node:process";
import { app } from "./app.js";
import { PrismaClient } from "@prisma/client";

dotenv.config({ path: "./../../.env" });

const port = process.env.BE_PORT || 3000;

export const prisma = new PrismaClient();

app.listen(port, () => {
	console.log(`Backend running on http://localhost:${port}`);
});

// const testPrisma = async () => {
// 	const newTask: Prisma.TaskCreateInput = {
// 		title: "TestTask122",
// 		description: "dd",
// 		updated_at: new Date(),
// 	};
// 	// const res = await prisma.task.create({ data: newTask });
// 	const res = await prisma.task.findMany();
// 	console.log(res);
// 	console.log("sdaafaddf");
// };
//
// testPrisma();

//

//
//
//
//
// export const prisma = new PrismaClient();
//
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
