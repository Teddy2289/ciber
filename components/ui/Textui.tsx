import React from "react";

export default function Textui() {
  return (
    <section className="features-area py-12">
      <div className="container mx-auto">
        <div className="row flex flex-wrap -mx-4">
          <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-8">
            <div className="single-feature text-center p-6 shadow-lg">
              <div className="f-icon mb-4">
                <img
                  src="img/features/f-icon1.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
              <h6 className="text-lg font-semibold mb-2">Free Delivery</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-8">
            <div className="single-feature text-center p-6 shadow-lg">
              <div className="f-icon mb-4">
                <img
                  src="img/features/f-icon2.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
              <h6 className="text-lg font-semibold mb-2">Return Policy</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-8">
            <div className="single-feature text-center p-6 shadow-lg">
              <div className="f-icon mb-4">
                <img
                  src="img/features/f-icon3.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
              <h6 className="text-lg font-semibold mb-2">24/7 Support</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 px-4 mb-8">
            <div className="single-feature text-center p-6 shadow-lg">
              <div className="f-icon mb-4">
                <img
                  src="img/features/f-icon4.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
              <h6 className="text-lg font-semibold mb-2">Secure Payment</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
