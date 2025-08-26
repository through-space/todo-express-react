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
