const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/fitverse";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("FitVerse Account DB connected"))
  .catch((err) => {
    console.error("FitVerse Account DB connection error:", err);
    process.exit(1);
  });


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

const User = mongoose.model("User", userSchema);



app.post("/api/signup", (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Failed to hash password:", err);
      return res.status(500).json({ error: "Failed to save user" });
    }

    
      
      const newUser = new User({
        name,
        email,
        phone,
        password:hashedPassword,
      });

      
      newUser.save().then((user) => {
        res.json(user);
      })
      .catch((err) => {
        if (err.code === 11000) {
          // Duplicate key error (email already exists)
          res.status(400).json({ error: "Email already exists" });
        } else {
          console.log(err);
          res.status(500).json({ error: "Failed to save user" });
        }
      });
  });
});




app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  // Find the user in the database based on the provided email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Compare the provided password with the stored password
      bcrypt.compare(password, user.password).then((passwordMatch) => {
        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid email or password" });
        }

        // Create and sign a JWT token
        const token = jwt.sign({ userId: user._id }, "78f15b5705f3cd8d8c39ec495b9ac2f6637bf215eaf3dbf02e9f7549320a483b");

        // Return the token in the response
        res.json({ token });
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});
