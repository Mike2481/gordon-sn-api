const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema(
  {
    username: {
      type: String.set("trim", true),
      unique: true,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: [isEmail, "invalid email"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;