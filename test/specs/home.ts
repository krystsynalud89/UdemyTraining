import HomePage from '../pageobjects/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {

    before(async () => {
        console.log('THIS COULD BE USED FOR TEST SETUP');
        await HomePage.open();
    })

    beforeEach(async () => {
        console.log('THIS RUNS BEFORE EACH TEST');
        await HomePage.open();
    })
    
    it('Open URL & assert title', async () => {
    
        allureReporter.addSeverity("minor");
        //await browser.url('https://practice.sdetunicorns.com/');
       
        const pageTitle = await browser.getTitle();
        console.log('Page Title:', pageTitle);

        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Click courses button & assert url contains courses text', async () => {

        allureReporter.addFeature("Text verification");
        allureReporter.addSeverity("critical");
        (await $('a.zak-button')).click();
        await browser.pause(2000)
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await expect (browser).toHaveUrlContaining('courses');
    });

    after(async () => {
        console.log('THIS COULD BE USED FOR TEST CLEANUP');

    afterEach(async () => {
        console.log('THIS RUNS AFTER EACH TEST');
    
    })
})
})