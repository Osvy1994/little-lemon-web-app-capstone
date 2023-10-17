import "../stylesheets/Gallery.css";

function Gallery() {
  return (
    <div id="gallery-section" className="main-menu-container">
      <div className="menu-container">
        <h1>LITTLE BITES, BIG FLAVOURS</h1>
        <div className="info-container">
          <p id="menu-info1">
            Little Lemon is a Mediterranean-inspired cocktail and wine bar that
            takes pride in offering a tantalizing menu centered around fresh
            seafood, succulent meats, flavorful charcuterie, and locally sourced
            ingredients.
          </p>
          <p id="menu-info2">
            Our chefs skillfully craft dishes that highlight the natural flavors
            of high-quality ingredients, ensuring a remarkable dining
            experience. From ocean-fresh seafood to perfectly grilled meats,
            every bite at Little Lemon is a celebration of Mediterranean
            cuisine. Our commitment to using locally sourced ingredients
            guarantees freshness and showcases the region's best. Join us at
            Little Lemon and indulge in a memorable dining experience where
            Mediterranean flavors take center stage.
          </p>
          <img
              id="drinks-image"
              src="Drinks.png"
              alt="Drinks Image"
              width="250px"
              height="300px"
            />
        </div>
      </div>
      <div className="gallery-container">
        <div className="box">
          <img src={require('../Gallery/image1.jpg')} alt="Food Image 1" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image2.jpg')} alt="Food Image 2" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image3.jpg')} alt="Food Image 3" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image4.jpg')} alt="Food Image 4" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image5.jpg')} alt="Food Image 5" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image6.jpg')} alt="Food Image 6" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image7.jpg')} alt="Food Image 7" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image8.jpg')} alt="Food Image 8" />
        </div>
        <div className="box">
          <img src={require('../Gallery/image9.jpg')} alt="Food Image 9" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
