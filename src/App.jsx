import React, { useState } from "react";

const courses = [
  "Computer Science",
  "Business Administration",
  "Data Science",
  "Graphic Design",
  "Psychology",
  "Digital Marketing",
];

function Field({ label, name, children, className = "" }) {
  return (
    <div className={`field ${className}`}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
}

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [studentName, setStudentName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStudentName(formData.get("firstName"));
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReset() {
    setSubmitted(false);
    setStudentName("");
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Wonders Academy home">
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span>
            <strong>wonders</strong>
            <small>ACADEMY</small>
          </span>
        </a>
        <div className="header-note">
          <span className="secure-icon" aria-hidden="true">✓</span>
          Secure enrollment
        </div>
      </header>

      <div className="content-wrap">
        <section className="intro" aria-labelledby="page-title">
          <div className="eyebrow"><span /> ADMISSIONS · 2025–26</div>
          <h1 id="page-title">Your next chapter<br />starts <em>here.</em></h1>
          <p>
            Take the first step toward your future. Complete your registration
            below and our admissions team will be in touch.
          </p>
          <div className="intro-details">
            <div className="detail-item">
              <span className="detail-icon" aria-hidden="true">✳</span>
              <span><strong>Personalized learning</strong><small>Courses designed around you</small></span>
            </div>
            <div className="detail-item">
              <span className="detail-icon" aria-hidden="true">↗</span>
              <span><strong>Career-ready skills</strong><small>Learn what moves you forward</small></span>
            </div>
          </div>
          <div className="campus-art" aria-hidden="true">
            <div className="sun" />
            <div className="campus-building">
              <div className="building-roof" />
              <div className="building-top"><i /><i /><i /><i /></div>
              <div className="building-base"><i /><i /><i /><i /><i /></div>
              <div className="building-steps" />
            </div>
            <div className="ground ground-back" />
            <div className="ground ground-front" />
            <div className="tree tree-one"><i /></div>
            <div className="tree tree-two"><i /></div>
          </div>
          <div className="aside-caption">
            <span className="caption-line" />
            <span>Make room for what’s next.</span>
          </div>
        </section>

        <section className="form-card" aria-labelledby="form-heading">
          {submitted ? (
            <div className="success-panel" role="status">
              <div className="success-mark" aria-hidden="true">✓</div>
              <span className="eyebrow">APPLICATION RECEIVED</span>
              <h2>Thank you, {studentName}!</h2>
              <p>
                Your registration is in. Our admissions team will review your
                details and contact you with the next steps.
              </p>
              <button className="button button-secondary" type="button" onClick={handleReset}>
                Submit another registration
              </button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <div>
                  <span className="step-label">STUDENT APPLICATION <span>01 / 01</span></span>
                  <h2 id="form-heading">Registration form</h2>
                  <p>Fields marked with <span className="required">*</span> are required.</p>
                </div>
                <div className="form-stamp" aria-hidden="true">✳</div>
              </div>

              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend><span className="section-number">01</span> Personal details</legend>
                  <div className="form-grid">
                    <Field label={<>First name <span className="required">*</span></>} name="firstName">
                      <input id="firstName" name="firstName" type="text" placeholder="e.g. Jordan" autoComplete="given-name" required />
                    </Field>
                    <Field label={<>Last name <span className="required">*</span></>} name="lastName">
                      <input id="lastName" name="lastName" type="text" placeholder="e.g. Lee" autoComplete="family-name" required />
                    </Field>
                    <Field label={<>Email address <span className="required">*</span></>} name="email" className="span-two">
                      <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                    </Field>
                    <Field label={<>Phone number <span className="required">*</span></>} name="phone">
                      <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" required />
                    </Field>
                    <Field label="Date of birth" name="birthDate">
                      <input id="birthDate" name="birthDate" type="date" autoComplete="bday" />
                    </Field>
                    <Field label="Gender" name="gender">
                      <select id="gender" name="gender" defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                        <option>Self-describe</option>
                      </select>
                    </Field>
                    <Field label="Country of residence" name="country">
                      <select id="country" name="country" defaultValue="">
                        <option value="" disabled>Select country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>India</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>
                </fieldset>

                <fieldset className="course-section">
                  <legend><span className="section-number">02</span> Course selection</legend>
                  <div className="form-grid">
                    <Field label={<>Program of interest <span className="required">*</span></>} name="course" className="span-two">
                      <select id="course" name="course" defaultValue="" required>
                        <option value="" disabled>Choose a course</option>
                        {courses.map((course) => <option key={course}>{course}</option>)}
                      </select>
                    </Field>
                    <Field label={<>Study mode <span className="required">*</span></>} name="studyMode">
                      <select id="studyMode" name="studyMode" defaultValue="" required>
                        <option value="" disabled>Choose study mode</option>
                        <option>On campus</option>
                        <option>Online</option>
                        <option>Hybrid</option>
                      </select>
                    </Field>
                    <Field label={<>Preferred start term <span className="required">*</span></>} name="startTerm">
                      <select id="startTerm" name="startTerm" defaultValue="" required>
                        <option value="" disabled>Select a term</option>
                        <option>Fall 2025</option>
                        <option>Winter 2026</option>
                        <option>Spring 2026</option>
                        <option>Fall 2026</option>
                      </select>
                    </Field>
                  </div>
                </fieldset>

                <label className="consent">
                  <input type="checkbox" name="consent" required />
                  <span className="custom-check" aria-hidden="true" />
                  <span>I agree to be contacted by Wonders Academy about my application. <span className="required">*</span></span>
                </label>

                <div className="form-footer">
                  <span><span className="lock-icon" aria-hidden="true">●</span> Your information is kept private and secure.</span>
                  <button className="button" type="submit">Submit application <span aria-hidden="true">→</span></button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>
      <footer className="site-footer">
        <span>© 2025 Wonders Academy</span>
        <span>Questions? <a href="mailto:admissions@wondersacademy.example">Contact admissions</a></span>
      </footer>
    </main>
  );
}

export default App;
