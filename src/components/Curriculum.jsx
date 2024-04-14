import { useTranslation } from 'react-i18next';
import { DashboardLayout } from '../dashboard/layouts/DashboardLayout';
import Skills from '../dashboard/components/Skills';
// import Experience from "../Experience";
import Experence from '../dashboard/components/Experence';

export const Curriculum = () => {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      {' '}
      <Experence />{' '}
    </DashboardLayout>
  );
};
