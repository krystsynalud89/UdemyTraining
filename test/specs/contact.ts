
import contactPage from "../pageobjects/components/contactPage"
import * as faker from 'faker';

describe(`Contact`, () => {
    it(`Fill all the input fields,submit form and assert success message`, async () => {
        await contactPage.open();
        // await HomePage.ContactComponent.NameInputField.addValue(`Test Name`);
        // await HomePage.ContactComponent.EmailInputField.addValue(`testemail@mail.com`);
        // await HomePage.ContactComponent.PhoneInputField.addValue(`123456789`);
        // await HomePage.ContactComponent.MessageInputField.addValue(`This is a test message`);
        // await HomePage.ContactComponent.click();

        //await contactPage.submitForm('Test Name', 'testemail@mail.com', '123456789', 'This is a test message');
        await contactPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraphs(2));
      
        const successAlert = await contactPage.AlertSuccess;
        await successAlert.waitForDisplayed();
        await expect (successAlert).toHaveTextContaining(`Thanks for contacting us! We will be in touch with you shortly`);
    });
});