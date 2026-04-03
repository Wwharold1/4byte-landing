import UsSection from "./components/us";
import ServicesSection from "./components/services";
import IdentitySection from "./components/identity";
import ClientsSection from "./components/clients";
import ContactSection from "./components/contact";

type HomeProps = {
  visible: boolean;
};

export default function Home({ visible }: HomeProps) {
  return (
    <>
      <UsSection visible={visible} />

      <ServicesSection />

      <IdentitySection />

      <ClientsSection />

      <ContactSection />
    </>
  );
}