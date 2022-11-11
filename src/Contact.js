import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <>
      <div className="container-md p-md-5 w-75 mb-5">
        <span className="h2 fw-semibold pt-3 px-2 pb-1 d-block">Contact Me</span>
        <span className="h6 fw-normal p-2 d-block">Hi there, contact me to ask me about anything you have in mind.</span>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default Contact;