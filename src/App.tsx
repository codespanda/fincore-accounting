import { Route, Routes } from "react-router"

import { Layout } from "@/components/layout"
import AboutPage from "@/pages/about"
import ContactPage from "@/pages/contact"
import HomePage from "@/pages/home"
import IndustriesPage from "@/pages/industries"
import LegalPage from "@/pages/legal"
import NotFoundPage from "@/pages/not-found"
import ResourcesPage from "@/pages/resources"
import ServiceDetailPage from "@/pages/service-detail"
import ServicesPage from "@/pages/services"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<LegalPage kind="privacy" />} />
        <Route path="terms" element={<LegalPage kind="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
