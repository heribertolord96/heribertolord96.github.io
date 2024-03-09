import { useTranslation } from "react-i18next";
import { Curriculum } from "../components/Curriculum";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {

    // const { status } = useCheckAuth();
    // console.log(useCheckAuth());
    // console.log({ auth: status });
    // if (status === 'checking') {
    //   return <Loader />;
    // }
  
    return (
      <Routes>
          <Route path='/*' element={<Curriculum />} />
      </Routes>
    );
  };
  