import BlogPage from "../pageobjects/components/blogPage";
describe("Blog", () => {
    it("Get the list of all recent posts and assert the length of each list bitem > 1 and assert the total length is 5", async() => {
    await BlogPage.open();

    // const recentPostsList = await $$('#recent-posts-3 ul li');
    const recentPostsList = await BlogPage.recentPostsList;
    for(const item of recentPostsList) {
        const text = await item.getText();
        await expect(text.length).toBeGreaterThan(10);
        await expect(recentPostsList).toHaveLength(5);
    };
   
    });
 });