import { Schema, model, models } from "mongoose";

const userEcom = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    Door: {
      type: String,
    },
    City: {
      type: String,
    },
    State: {
      type: String,
      },
    Country: {
        type:String 
    }
  },
});

const UserEcom = models.UserEcom || model("UserEcom", userEcom)

export default UserEcom