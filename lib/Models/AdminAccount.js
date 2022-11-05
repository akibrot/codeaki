import mongoose from "mongoose";

const adminAccountSchema = mongoose.Schema({
  AdminName: { type: String },
  Email: { type: String },
  Password: { type: String },
});
const AdminAccount = mongoose.model("AdminAccount", adminAccountSchema);
export default AdminAccount;
