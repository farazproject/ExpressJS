const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const { age } = req.query;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or missing user ID (must be a number)'
      });
    }
    if (age && isNaN(age)) {
      return res.status(400).json({
        success: false,
        error: 'Age must be a number if provided'
      });
    }
    res.json({
      success: true,
      data: {
        userId: parseInt(id),
        age: age ? parseInt(age) : 'not provided'
      }
    });
  } catch (err) {
    console.error('GET /users/:id error:', err);
    res.status(500).json({
      success: false,
      error: 'Something went wrong while fetching user'
    });
  }
};

const createUser = (req, res) => {
  try {
    const { name, email } = req.body;

    // Simple validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Name is required and must be a valid string'
      });
    }

    if (
      !email ||
      typeof email !== 'string' ||
      !email.includes('@') ||
      !email.includes('.')
    ) {
      return res.status(400).json({
        success: false,
        error: 'A valid email address is required'
      });
    }

    res.status(201).json({
      success: true,
      data: {
        name: name.trim(),
        email: email.trim()
      }
    });
  } catch (err) {
    console.error('POST /users error:', err);
    res.status(500).json({
      success: false,
      error: 'Something went wrong while creating user'
    });
  }
};

module.exports = {
  getUser,
  createUser
};
