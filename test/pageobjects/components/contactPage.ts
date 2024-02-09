class ContactPage {

   get NameInputField() {
    return $(`#evf-277-field_ys0GeZISRs-1`)
   } 
   
   get EmailInputField() {
    return $(`#evf-277-field_LbH5NxasXM-2`)
   }
   
   get PhoneInputField() {
    return $(`#evf-277-field_66FR384cge-3`)
   }
   
   get MessageInputField() {
    return $(`#evf-277-field_yhGx3FOwr2-4`)
   }

   get AlertSuccess() {
    return $(`//* [@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]`);
   }

//    click() {
//     const submitButton = $(`#evf-submit-277`);
//     submitButton.waitForDisplayed(); // Дождитесь, чтобы элемент стал видимым (если необходимо)
//     submitButton.click();
//   }

   async submitForm(name, email, phone, message) {
    (await this.NameInputField).addValue(name);
    (await this.EmailInputField).addValue(email);
    (await this.PhoneInputField).addValue(phone);
    (await this.MessageInputField).addValue(message);
    (await $(`#evf-submit-277`)).click();
   }

  open() {
    return browser.url("/contact");
  }
}

export default new ContactPage();