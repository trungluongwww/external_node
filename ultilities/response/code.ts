import { IResponseCode } from "../../interfaces/response";

const commonSuccessKey = "common_success";
const commonUnauthorizedKey = "common_unauthorized";
const commonBadRequestKey = "common_bad_request";
const commonNoPermissionKey = "common_no_permission";
const commonNotFoundKey = "common_not_found";

let list: Array<IResponseCode> = [
  {
    message: "thành công",
    key: commonSuccessKey,
  },
  {
    message: "dữ liệu không hợp lệ",
    key: commonBadRequestKey,
  },
  {
    message: "không xác thực được người dùng",
    key: commonUnauthorizedKey,
  },
  {
    message: "không có quyền thực hiện hành động này",
    key: commonNoPermissionKey,
  },
  {
    message: "không tìm thấy",
    key: commonNotFoundKey,
  },
];

export default {
  list,
  commonSuccessKey,
  commonBadRequestKey,
  commonUnauthorizedKey,
  commonNoPermissionKey,
  commonNotFoundKey,
};
