import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div container-md>
      <span className="display-5 fw-bold pt-3 px-2 pb-1 d-block">Contact Me</span>
      <span className="h6 fw-normal p-2 d-block">Hi there, contact me to ask me about anything you have in mind.</span>
      <ContactForm />
    </div>
  )
}

export default Contact;