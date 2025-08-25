import { Request, Response } from "express";
import { IRegisterUser } from "./types.js";

// const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // Use env var in production
// const TOKEN_EXPIRY = "1h";

//TODO: fix IRegisterUser multiple definitions
export const getAllTasks = async (req: Request<{}, {}, IRegisterUser>, res: Response) => {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400).json({ message: "Missing username or password" });
		return;
	}

	// authService
	// 	.register({ username, password })
	// 	.then((user) => {
	// 		if (!user) {
	// 			const err = new Error("Unable to create user.");
	// 			res.status(500).json({ message: "Server error", error: err });
	// 			return;
	// 		}
	//
	// 		res.status(201).json({
	// 			message: "User registered",
	// 			user: { username: user.username, id: user.id },
	// 		});
	// 	})
	// 	.catch((err: IAuthError) => {
	// 		if (err.type === "user_exists") {
	// 			res.status(400).json({ message: "User already exists" });
	// 			return;
	// 		}
	// 	});
};

// export const register = async (req: Request<{}, {}, IRegisterUser>, res: Response) => {
// 	try {
// 		const { username, password } = req.body;
//
// 		authService.register({ username, password });
//
// 		const existingUser = await prisma.user.findUnique({ where: { email } });
// 		if (existingUser) {
// 			return res.status(400).json({ message: "User already exists" });
// 		}
//
// 		// Hash password
// 		const hashedPassword = await bcrypt.hash(password, 10);
//
// 		// Create user
// 		const user = await prisma.user.create({
// 			data: { email, password: hashedPassword },
// 		});
//
// 		res.status(201).json({
// 			message: "User registered",
// 			user: { id: user.id, email: user.email },
// 		});
// 	} catch (err) {
// 		res.status(500).json({ message: "Server error", error: err });
// 	}
// };

// LOGIN
// export const login = async (req: Request, res: Response) => {
// 	try {
// 		const { email, password } = req.body;
//
// 		const user = await prisma.user.findUnique({ where: { email } });
// 		if (!user) {
// 			return res.status(400).json({ message: "Invalid credentials" });
// 		}
//
// 		// Compare password
// 		const isMatch = await bcrypt.compare(password, user.password);
// 		if (!isMatch) {
// 			return res.status(400).json({ message: "Invalid credentials" });
// 		}
//
// 		// Generate JWT
// 		const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
// 			expiresIn: TOKEN_EXPIRY,
// 		});
//
// 		res.json({ token, user: { id: user.id, email: user.email } });
// 	} catch (err) {
// 		res.status(500).json({ message: "Server error", error: err });
// 	}
// };
//
// export const verifyToken = (req: Request, res: Response) => {
// 	try {
// 		const token = req.headers["authorization"]?.split(" ")[1]; // "Bearer TOKEN"
// 		if (!token) return res.status(401).json({ message: "No token provided" });
//
// 		const decoded = jwt.verify(token, JWT_SECRET);
// 		res.json({ valid: true, decoded });
// 	} catch (err) {
// 		res.status(401).json({ valid: false, message: "Invalid or expired token" });
// 	}
// };
