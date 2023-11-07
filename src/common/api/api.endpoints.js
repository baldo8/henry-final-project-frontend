import api from "./api.service.js";

/*--------------------------------------------------------------------------------*/
/* for "Reading" endpoints                                                        */
/*--------------------------------------------------------------------------------*/
/*  Method to Get ... */
const read_item = async () => {
  try {
    const response = await api.get('/item', {});
    return response;
  }
  catch (error) {
    console.error(error);
  }
};

/*--------------------------------------------------------------------------------*/
/* for "Creating" endpoints                                                       */
/*--------------------------------------------------------------------------------*/
/*  Method to Create ... */
const create_item = async(machine_id, content) => {
  try {
    const response = api.put(`/machine/request`, {machine_id:machine_id, content:content});
    return response;
  }
  catch (error) {
    console.error(error);
  }
};

/*--------------------------------------------------------------------------------*/
/* for "Updating" endpoints                                                       */
/*--------------------------------------------------------------------------------*/
/*  Method to Update ... */
const update_item = async(machine_id, content) => {
  try {
    const response = api.put(`/machine/request`, {machine_id:machine_id, content:content});
    return response;
  }
  catch (error) {
    console.error(error);
  }
};

/*--------------------------------------------------------------------------------*/
/* for "Deleting" endpoints                                                       */
/*--------------------------------------------------------------------------------*/
/*  Method to Delete ... */
const delete_item = async(machine_id) => {
  try {
    const response = api.delete(`/machine`, {machine_id:machine_id});
    return response;
  }
  catch (error) {
    console.error(error);
  }
};

/*--------------------------------------------------------------------------------*/
/* expose methods to other services or actions                                    */
/*--------------------------------------------------------------------------------*/
export default {
  read_item: read_item,
  create_item: create_item,
  update_item: update_item,
  delete_item: delete_item,
};