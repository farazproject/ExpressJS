const subtract = (req, res) => {
    try {
      const { a,b } = req.params;
  
      if (!a|| isNaN(a)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid or missing number (must be a number)'
        });
      }
      if (!b || isNaN(b)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid or missing number (must be a number)'
        });
      }
      res.json({
        success: true,
        data: {
          result : a - b 
        }
      });
    } catch (err) {
      console.error('GET /cal/subtract/:a/:b error:', err);
      res.status(500).json({
        success: false,
        error: 'Something went wrong while fetching user'
      });
    }
  };

  module.exports = {
    subtract,
  };
  