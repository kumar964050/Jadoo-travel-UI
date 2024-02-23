import "./index.css";

const Category = () => {
  return (
    <div className="category-container">
      <center>
        <span className="category-title-1">CATEGORY</span>
        <h1 className="category-title-2">We Offer Best Services</h1>
      </center>
      <div className="category-list-container">
        <div className="category-card">
          <img src="/images/c-1.png" />
          <span>Local Events</span>
          <p>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.{" "}
          </p>
        </div>
        {/*  */}
        <div className="category-card">
          <img src="/images/c-2.png" />
          <span>Best Flights</span>
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className="category-card">
          <img src="/images/c-3.png" />
          <span>Calculated Weather</span>
          <p>Build wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="category-card">
          <img src="/images/c-4.png" />
          <span>Customization</span>
          <p>We deliver outsourced aviation services for military customers</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
