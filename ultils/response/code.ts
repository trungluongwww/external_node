import { IResponseCode } from "../../interfaces/response";

const commonSuccessKey = "common_success";
const commonUnauthorizedKey = "common_unauthorized";
const commonBadRequestKey = "common_bad_request";
const commonNoPermissionKey = "common_no_permission";
const commonNotFoundKey = "common_not_found";
const commonInvalidPagination = "common_invalid_pagination";
const commonInvalidKeyword = "common_invalid_keyword";
const commonInvalidOrderBy = "common_invalid_order_by";
const commonInvalidID = "common_invalid_id";

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
  {
    message: "giá trị phân trang không hợp lệ",
    key: commonInvalidPagination,
  },
  {
    message: "giá trị tìm kiếm không hợp lệ",
    key: commonInvalidKeyword,
  },
  {
    message: "giá trị sắp xếp không hợp lệ",
    key: commonInvalidOrderBy,
  },
  {
    message: "id không hợp lệ",
    key: commonInvalidID,
  },
];

export default {
  list,
  commonSuccessKey,
  commonBadRequestKey,
  commonUnauthorizedKey,
  commonNoPermissionKey,
  commonNotFoundKey,
  commonInvalidPagination,
  commonInvalidKeyword,
  commonInvalidOrderBy,
  commonInvalidID,
};
