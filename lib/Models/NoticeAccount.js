import mongoose from "mongoose";

const noticeSchema = mongoose.Schema({
  OrganizationName: { type: String },
  Email: { type: String },
  Phone: { type: String },
  Address: { type: String },
  Password: { type: String },
  Picture: { type: String },
});
const NoticeAccount = mongoose.model("NoticeAccount", noticeSchema);
export default NoticeAccount;
