<template>
    <section id="four">
          <div class="container">
            <h3>Contact Me</h3>
            <vee-form :validation-schema="contactSchema"
             method="post" action="https://formspree.io/f/xzbyaqnb">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <vee-field type="text" name="name" id="name" placeholder="Name" />
                  <ErrorMessage class="form-error-text" name="name" />
                </div>
                <div class="col-6 col-12-xsmall">
                  <vee-field type="email" name="email" id="email" placeholder="Email" />
                  <ErrorMessage class="form-error-text" name="email" />
                </div>
                <div class="col-12">
                  <vee-field type="text" name="subject" id="subject" placeholder="Subject" />
                  <ErrorMessage class="form-error-text" name="subject" />
                </div>
                <div class="col-12">
                  <vee-field as="textarea" name="message" id="message"
                  placeholder="Message" rows="6" />
                  <ErrorMessage class="form-error-text" name="message" />
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li><input type="submit" class="primary" value="Send Message" /></li>
                    <li><input type="reset" value="Reset Form" /></li>
                  </ul>
                </div>
              </div>
            </vee-form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Section Four',
  data() {
    return {
      contactSchema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        subject: 'required|min:5|max:100',
        message: 'required|min:25|max:750',
      },
    };
  },
};
</script>
