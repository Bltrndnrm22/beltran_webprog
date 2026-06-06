import User from '../models/User.js';

const normalizeUser = (body) => ({
  firstName: String(body.firstName || '').trim(),
  lastName: String(body.lastName || '').trim(),
  age: String(body.age || '').trim(),
  gender: String(body.gender || '').trim().toLowerCase(),
  contactNumber: String(body.contactNumber || '').trim(),
  email: String(body.email || '').trim().toLowerCase(),
  role: String(body.role || 'viewer').trim().toLowerCase(),
  username: String(body.username || '').trim().toLowerCase(),
  password: String(body.password || ''),
  address: String(body.address || '').trim(),
  isActive: Boolean(body.isActive),
});

const sendMongoError = (error, res) => {
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern || {})[0] || 'field';
    return res.status(409).json({ message: `${field} already exists.` });
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Server error.' });
};

export const getUsers = async (_req, res) => {
  const users = await User.find().sort({ createdAt: 1 });
  res.json(users);
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(normalizeUser(req.body));
    res.status(201).json(user);
  } catch (error) {
    sendMongoError(error, res);
  }
};

export const signupUser = async (req, res) => {
  try {
    const user = await User.create({
      ...normalizeUser(req.body),
      role: 'viewer',
      isActive: true,
    });

    res.status(201).json({
      token: `demo-token-${user.id}`,
      id: user.id,
      firstName: user.firstName,
      type: user.role,
    });
  } catch (error) {
    sendMongoError(error, res);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      normalizeUser(req.body),
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.json(user);
  } catch (error) {
    return sendMongoError(error, res);
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  return res.json({ message: 'User deleted.' });
};

export const loginUser = async (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');
  const user = await User.findOne({ email, password, isActive: true });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  return res.json({
    token: `demo-token-${user.id}`,
    id: user.id,
    firstName: user.firstName,
    type: user.role,
  });
};
