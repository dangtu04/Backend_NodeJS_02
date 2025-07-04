const {
  handleCreateClinic,
  handleGetAllClinic,
  handleGetDetailClinic,
  handleGetClinicById,
  handleUpdateClinic,
  handleDeleteClinic,
  handleSearchClinic,
} = require("../services/clinicService");

const createClinic = async (req, res) => {
  try {
    let data = await handleCreateClinic(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

const getAllClinic = async (req, res) => {
  try {
    let data = await handleGetAllClinic();
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

const getDetailClinic = async (req, res) => {
  try {
    let data = await handleGetDetailClinic(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};


const getClinicById = async (req, res) => {
  try {
    let data = await handleGetClinicById(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};


const updateClinic = async (req, res) => {
  try {
    let data = await handleUpdateClinic(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};


const deleteClinic = async (req, res) => {
  try {
    let data = await handleDeleteClinic(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};


const searchClinic = async (req, res) => {
  try {
    let data = await handleSearchClinic(req.query.keyWord);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Error from server: ", e);
    return res.status(400).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};


module.exports = {
  createClinic,
  getAllClinic,
  getDetailClinic,
  getClinicById,
  updateClinic,
  deleteClinic,
  searchClinic
};
