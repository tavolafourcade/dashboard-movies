import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from "./Footer";
function ContentWrapper() {
  return (
    <div>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar/>
            <ContentRowTop/>
          </div>
          <Footer/>
        </div>
      
    </div>
  );
  }
  export default ContentWrapper;