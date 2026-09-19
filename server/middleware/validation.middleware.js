export const validateContactRequest = (req, res, next) => {
  const {
    name,
    email,
    subject,
    message
  } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, subject and message are required."
    });
  }

  if (name.length < 2 || name.length > 80) {
    return res.status(400).json({
      success: false,
      message: "Name must contain 2 to 80 characters."
    });
  }

  if (subject.length < 3 || subject.length > 150) {
    return res.status(400).json({
      success: false,
      message: "Invalid subject."
    });
  }

  if (message.length < 10 || message.length > 3000) {
    return res.status(400).json({
      success: false,
      message: "Message must contain 10 to 3000 characters."
    });
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address."
    });
  }

  next();
};