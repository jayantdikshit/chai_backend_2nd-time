import mongoose, { Schema } from "mongoose";

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
        username: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        emil: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullName: {

            required: true,
            unique: true,
            trim: true,
            index: true

        },
        avatar: {
            type: string, // cloudinary url
            required: true
        },
        coverImage: {
            type: string //cloudianry url
        },
        watchtory: {
            type: Schema.Type.ObjectId,
            ref: "Vedio"
        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refereshToken: {
            type: String,
        }

    }, {
        timestamps: true
    }

)

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sing({
            _id: this._id,
            email: this.email,
            username: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefersehToken = function() {
    return jwt.sing({
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema);