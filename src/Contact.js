import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div container-md>
      <p className="display-6 fw-semibold">Contact Me</p>
      <p className="lead fw-normal">Hi there, contact me to ask me about anything you have in mind.</p>
      <ContactForm />
    </div>
  )
}

export default Contact;