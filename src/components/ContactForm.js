export default function ContactForm() {
  return (
    <div>
      <label for="first_name">First Name</label>
      <input className="" id="first_name" type="text" />
      <label for="last_name">Last Name</label>
      <input className="" id="last_name" type="text" />
      <label for="email"></label>
      <input className="" id="email" type="email" />
      <label for="message"></label>
      <textarea rows="20" cols="20" id="message" className=""></textarea>
    </div>
  )
}