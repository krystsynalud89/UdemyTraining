const path = require('path');

describe("Upload Tests", () => {
  it("Simple upload test", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    

    const filePath = path.join(__dirname, '../data/logotitle.png');

    const remoteFilePath = await browser.uploadFile(filePath);
    await (await $('#file-upload')).setValue(remoteFilePath);
    (await $('#file-submit')).click();
    await expect($('h3')).toHaveText('File Uploaded!');
  });

  it.only('Upload on a hidden input field', async() => {

    await browser.url('https://practice.sdetunicorns.com/cart/');
    const filePath = path.join(__dirname, '../data/logotitle.png');
    const remoteFilePath = await browser.uploadFile(filePath);
    await browser.execute("document.querySelector('#upfile_1').className = ''");
    await (await $('#upfile_1')).setValue(remoteFilePath);
    (await $('#upload_1')).click();
    await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');

  })
});
