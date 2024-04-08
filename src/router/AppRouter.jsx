import { useTranslation } from "react-i18next";
import { Curriculum } from "../components/Curriculum";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Curriculum />} />
    </Routes>
  );
};
