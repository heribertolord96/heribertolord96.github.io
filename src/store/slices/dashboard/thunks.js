import { immcaseApi } from '../../../api';
import { setDashboardForDetails, setLoading } from './dashboardSlice';

export const getApiDashBoardDetails = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await immcaseApi.get(`/dashboard`);
      await dispatch(setDashboardForDetails(response.data));
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

// export const getContactById = ({ idContact }) => {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//       const { data } = await immcaseApi.get(`/resource/clients/${idContact}`);
//       await dispatch(setContactForEdit(data));
//     } catch (error) {
//       console.error(error);
//     }
//     dispatch(setLoading(false));
//   };
// };
