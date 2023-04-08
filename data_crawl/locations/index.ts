import * as fs from "fs";

interface ILocationProvince {
  id: string;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ILocationDistrict {
  id: string;
  province_id: string;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ILocationWard {
  id: string;
  districts_id: string;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

const getLocationProvince = (): Array<ILocationProvince> => {
  const data = JSON.parse(
    fs.readFileSync(__dirname + "/provinces.json").toString("utf8")
  ) as Array<ILocationProvince>;

  return data;
};

const getLocationDistrict = (): Array<ILocationDistrict> => {
  const data = JSON.parse(
    fs.readFileSync(__dirname + "/districts.json").toString("utf8")
  ) as Array<ILocationDistrict>;

  return data;
};

const getLocationWard = (): Array<ILocationWard> => {
  const data = JSON.parse(
    fs.readFileSync(__dirname + "/wards.json").toString("utf8")
  ) as Array<ILocationWard>;

  return data;
};

export default {
  getLocationWard,
  getLocationDistrict,
  getLocationProvince,
};
