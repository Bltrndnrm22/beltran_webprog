import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
const allowedOrigins = new Set([
  clientUrl,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
]);
const localDevOrigin = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin) || localDevOrigin.test(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked origin: ${origin}`));
    },
  })
);
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Danrome API is running.' });
});

app.use('/api/users', userRoutes);

const seedDefaultUser = async () => {
  await User.findOneAndUpdate(
    { email: 'beltran@admin.com' },
    {
      firstName: 'Danrome',
      lastName: 'Beltran',
      age: '21',
      gender: 'male',
      contactNumber: '09123456789',
      email: 'beltran@admin.com',
      role: 'admin',
      username: 'beltranadmin',
      password: 'beltran123',
      address: 'Manila, Philippines',
      isActive: true,
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};

const startServer = async () => {
  try {
    await connectDB();
    await seedDefaultUser();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
