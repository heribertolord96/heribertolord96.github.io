import { useState } from 'react';
import { ProfessionalLayout } from './layout/ProfessionalLayout';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { TechnologiesSection } from './sections/TechnologiesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { ServiceRequestForm } from './services/ServiceRequestForm';

export const Curriculum = () => {
  const [serviceFormOpen, setServiceFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleRequestService = () => {
    setServiceFormOpen(true);
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCloseServiceForm = () => {
    setServiceFormOpen(false);
    setSelectedService(null);
  };

  return (
    <ProfessionalLayout>
      <HeroSection
        onRequestService={handleRequestService}
        onViewServices={handleViewServices}
      />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />

      <ServiceRequestForm
        open={serviceFormOpen}
        onClose={handleCloseServiceForm}
        selectedService={selectedService}
      />
    </ProfessionalLayout>
  );
};
