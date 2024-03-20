export function CreateAccount() {
  return (
    <form>
      <div className="firstandlastwrapper">
        <div className="legalfirst-wrapper">
          <div className="legal-first-name">Legal first name*</div>
          <input
            type="text"
            placeholder="Legal first name"
            className="legalname-input"
            required
          />
        </div>
        <div className="legalfirst-wrapper">
          <div className="legal-first-name">Legal last name*</div>

          <input
            type="text"
            placeholder="Legal last name"
            className="legalname-input"
            required
          />
        </div>
      </div>
      <div className="legalemailandpasswordwrapper">
        <div className="legailemail-wrapper">
          <div className="legalemail-text">Email*</div>
          <input
            type="text"
            placeholder="Email"
            className="legalemail-input"
            required
          />
        </div>
        <div className="legailemail-wrapper">
          <div className="legalemail-text">Password*</div>
          <input
            type="text"
            placeholder="Minimum 8 characters"
            className="legalemail-input"
            required
          />
        </div>
      </div>
      <div className="useragreement-wrapper">
        <div className="checkbox-wrapper">
          <input type="checkbox" className="agreement-checkbox" required />
        </div>
        <div className="agreement-body">
          I certify that I am 18 years of age or older, I agree to the
          <span className="blue"> User Agreement</span>, and I have read the
          <span className="blue"> Privacy Policy</span> and
          <span className="blue"> Financial Privacy Notice</span>.
        </div>
      </div>
      <button className="freeaccount-button">Create free account</button>
    </form>
  );
}
