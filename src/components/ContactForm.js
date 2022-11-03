export default function ContactForm() {
  return (
    <div className="pt-4 px-2">
      <div className="row g-2">
        <div className="col-12 col-md-6">
          <label for="first_name" className="form-label fw-semibold">First Name</label>
          <input className="form-control w-100" id="first_name" type="text" placeholder="Enter your first name" />
        </div>
        <div className="col-12 col-md-6"> 
          <label for="last_name" className="form-label fw-semibold">Last Name</label>
          <input className="form-control" id="last_name" type="text" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="pt-2">
        <label for="email" className="form-label fw-semibold">Email</label>
        <input className="form-control" id="email" type="email" placeholder="israel707@gmail.com" />
      </div>
      <div className="pt-2">
        <label for="message" className="form-label fw-semibold">Message</label>
        <textarea rows="3" id="message" className="form-control" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
      </div>
      <div className="form-check pt-2">
        <input type="checkbox" class="form-check-input" id="form_check" />
        <label className="form-check-label fw-normal" for="form_check">You agree to providing your data to Israel707 who may contact you</label>
      </div>
    </div>
  )
}