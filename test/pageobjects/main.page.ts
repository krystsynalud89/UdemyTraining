import { $ } from '@wdio/globals'
import BasePage from "./base.page";


class MainPage extends BasePage {

    public get logo(): WebdriverIO.Element {
        return $(`//header//*[@data-testid="logo-link"]`)
    };

    public get scheduleAnAppointmentLink(): WebdriverIO.Element {
        return $(`//*[text()="Schedule an appointment"]`)
    };

    public get subscriptionsLink(): WebdriverIO.Element {
        return $(`//header//*[text()="Subscriptions"]`)
    }

    public get contactsLink(): WebdriverIO.Element {
        return $(`//*[text()="Contacts"]`)
    };

    public get signInButton(): WebdriverIO.Element {
        return $(`//*[text()="Sign in"]`);
    }

    public get signUpButton(): WebdriverIO.Element {
        return $(`//*[text()="Sign up"]`);
    }
    public get contactLink(): WebdriverIO.Element {
        return $(`//*[@id="menu-item-493"]/a`)
    }

    async open(url: string): Promise<string> {
        return super.open(url);
    }

    async getContactLinkText(): Promise<string> {
        return this.getFormattedText(this.contactsLink);
    }

    async clickOnSignUpButton(): Promise<void> {
        await this.waitForElementAndClick(this.signUpButton);
    }
}

export default new MainPage();