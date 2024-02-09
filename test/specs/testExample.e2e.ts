import MainPage from "../pageobjects/main.page.ts";
import contactPage from "../pageobjects/contact.page.ts";
import { expect } from "chai";
import { HEADER_LINKS_TEXT } from "../data/main.page.data";
import HomePage from '../pageobjects/home-page.ts';
import allureReporter from '@wdio/allure-reporter';



// describe('Check MainPage layout', () => {
//     it('Check "Contacts" link text', async () => {
//         await browser.maximizeWindow();
//         await MainPage.open('http://10.10.14.14:3000/');

//         expect(await MainPage.getContactLinkText()).to.be.equal(HEADER_LINKS_TEXT.CONTACTS);
//     })
// })

describe("Navigation Menu", () => {
  it("Get the text from all menu items and assert them", async () => {
    // await browser.url("https://practice.sdetunicorns.com/");
    allureReporter.addFeature("Navigation");
    allureReporter.addSeverity("critical");
    await HomePage.open();
    await browser.maximizeWindow();
    browser.pause(5000);

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    const actualLinks = [];

    //await (await $ (`//*[@id="menu-item-491"]`)).waitForClickable();
    await browser.waitUntil(async function () {
      const homeText = await HomePage.NavComponent.firstNavMenuList.getText();
      return await homeText === "Home";
    }, {
      timeout: 5000,
      timeoutMsg: `"Could not verify the Home text from '//*[@id='menu-item-489']/a'`}
    )

    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    };

    await expect(expectedLinks).to.have.all.members(actualLinks);
  });
});

describe("Navigation Menu", () => {
    it("Fill in the form and assert message", async () => {

      await browser.url("https://practice.sdetunicorns.com/");
      const contactBtn =$(`//*[@id="menu-item-493"]/a`);
      await contactBtn.click();
      browser.maximizeWindow();
      const fieldName = $(`//input[@id="evf-277-field_ys0GeZISRs-1"]`);
      fieldName.setValue('kristina');
      const emailField = $('//input[@id="evf-277-field_LbH5NxasXM-2"]');
      emailField.setValue('csc@qq.com');
      const phoneField = $('//input[@id="evf-277-field_66FR384cge-3"]');
      phoneField.setValue('778899');
      const sbmButton = $('//*[@id="evf-submit-277"]');
      await sbmButton.click();
      await browser.keys(['Enter']);
      
      
      const message = $('//*[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]');
      await message.waitForDisplayed({ timeout: 20000 });

      const messageText = await message.getText();
      const expectedMessage = 'Thanks for contacting us! We will be in touch with you shortly';
      console.log(messageText);
      console.log(expectedMessage);
      await expect(messageText).to.equal(expectedMessage);
      
    });
});

//  describe("Blog", () => {
//     it("Get the list of all recent posts and assert the length of each list bitem > 1 and assert the total length is 4", async() => {
//     await browser.url("https://practice.sdetunicorns.com/blog/");

//     const recentPostsList = await $$('#recent-posts-3 ul li');
//     for(const item of await recentPostsList) {
//         const text = await item.getText();
//         await expect(text.length).greaterThan(10);
//     };
//     await expect(recentPostsList).to.have.lengthOf(5);
    
//     });
//  });
   


