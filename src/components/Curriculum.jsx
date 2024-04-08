import { useTranslation } from "react-i18next";
import { DashboardLayout } from "../dashboard/layouts/DashboardLayout";
import Skills from "../Skills";
// import Experience from "../Experience";
import Experence from "../Experence";

export const Curriculum = () => {
    const { t } = useTranslation();

    return (<DashboardLayout> <Experence /> </DashboardLayout>);
}