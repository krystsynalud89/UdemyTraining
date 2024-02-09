class BlogPage {
  get recentPostsList() {
    return $$("#recent-posts-3 ul li");
  }

  open() {
    return browser.url("/blog");
  }
  
};
export default new BlogPage();
