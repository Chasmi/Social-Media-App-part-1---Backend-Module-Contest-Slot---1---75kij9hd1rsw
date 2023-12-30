const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 8) {
          throw new Error('Password should be at least 8 characters long');
        }
      },
    },
    profilePicture: {
      type: String,
      default: 'https://example.com/default-profile-picture.jpg',
    },
    bio: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    socialMediaHandles: {
      twitter: {
        type: String,
        default: '',
      },
      linkedin: {
        type: String,
        default: '',
      },
    },
    interests: [
      {
        type: String,
      },
    ],
    privacySettings: {
      isProfilePublic: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('User', userSchema);
