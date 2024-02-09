describe('IFrame', () => {
    it('Working with iFrame', async () => {
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');
        const iframe = await $( `//*[@name='advanced_iframe']`);
        await browser.switchToFrame(iframe);
        
        await expect ($( `//h1[@class="ekit-heading--title elementskit-section-title "]`).isDisplayed());

        await browser.switchToParentFrame();
        
        await expect ($(`h1.zak-page-title`)).toHaveText(`IFrame Sample`)
    });
});