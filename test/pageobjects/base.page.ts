import {browser} from '@wdio/globals'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
    private timeout: { s: number; xl: number; xs: number; l: number; m: number; xxl: number };

    constructor() {
        this.timeout = {
            xs: 500,
            s: 1000,
            m: 2000,
            l: 10000,
            xl: 20000,
            xxl: 60000
        }
    }

    /**
     * Opens a sub page of the page
     * @param url
     */
    protected async open(url: string): Promise<string> {
        return await browser.url(url);
    }

    protected async waitUntilIsVisible(element: WebdriverIO.Element, timeout: number = this.timeout.l) {
        await element.waitForDisplayed({timeout, interval: this.timeout.xs});
    }

    protected async waitUntilIsNotVisible(element: WebdriverIO.Element, timeout: number = this.timeout.xxl) {
        await element.waitForDisplayed({
            timeout,
            interval: this.timeout.xs,
            reverse: true,
            timeoutMsg: `${element} is still available`
        });
    }

    protected async forceClick(element: WebdriverIO.Element) {
        return browser.execute('arguments[0].click();', element)
    }

    protected async waitForElementAndClick(element: WebdriverIO.Element, timeout: number = this.timeout.l) {
        await this.waitUntilIsVisible(element, timeout);
        await element.scrollIntoView();
        await element.click();
    }

    protected async waitForElementAndSendKeys(element: WebdriverIO.Element, text: string, timeout: number = this.timeout.l) {
        await this.waitUntilIsVisible(element, timeout);
        await element.clearValue();
        await element.setValue(text);
    }

    protected async getFormattedText(element: WebdriverIO.Element) {
        await this.waitUntilIsVisible(element);
        await element.scrollIntoView();
        return (await element.getText())
            .trim()
            .replace(/[\n\r]/g, ' ')
            .replace(/\s{2,}/g, ' ');
    }
}

