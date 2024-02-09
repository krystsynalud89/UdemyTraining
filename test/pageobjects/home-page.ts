import NavComponent from "./components/navPage";
import BlogPage from "./components/blogPage";
import ContactPage from "./components/contactPage";

class HomePage {
  open() {
    return browser.url("/");
  }

  get NavComponent() {
    return NavComponent;
  }

  get BlogComponent() {
    return BlogPage;
  }

  get ContactPage() {
   return ContactPage;
  }
}

export default new HomePage();
