export default function ContactForm() {
  return (
    <form className="pt-4 px-2 needs-validation" noValidate>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label for="first_name" className="form-label fw-semibold">First Name</label>
          <input className="form-control w-100" id="first_name" type="text" placeholder="Enter your first name" />
        </div>
        <div className="col-12 col-md-6"> 
          <label for="last_name" className="form-label fw-semibold">Last Name</label>
          <input className="form-control" id="last_name" type="text" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="pt-3">
        <label for="email" className="form-label fw-semibold">Email</label>
        <input className="form-control" id="email" type="email" placeholder="israel707@gmail.com" />
      </div>
      <div className="pt-3">
        <label for="message" className="form-label fw-semibold">Message</label>
        <textarea rows="3" id="message" className="form-control" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
        <div className="invalid-feedback">
          Please enter a message in the textarea
        </div>
      </div>
      <div className="form-check pt-3">
        <input type="checkbox" class="form-check-input" id="form_check" />
        <label className="form-check-label fw-normal" for="form_check">You agree to providing your data to Israel707 who may contact you</label>
      </div>
      <div class="pt-3">
        <button class="btn btn-primary w-100" type="submit" id="btn__submit">Send message</button>
      </div>
    </form>
  )
}