const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: async function (value) {
                // Custom validation logic to check uniqueness
                const email = await this.constructor.findOne({ email: value });
                return !email;
            },
            message: 'Email already exists',
        },
        minLength: [5, 'must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [3, 'Password must be at least 3 characters long'],
    },
    avatar: {
        type: String,
        required: false,
    },
}, { timestamps: true });


userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Password don`t match');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 9);
    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
