import React from 'react'
import { Alert, Snackbar } from "@mui/material";
import "./allproducts.css"


export default function AllProducts({product}) {
  const vertical = "top";
  const horizontal = "center";
  const setOpen=()=>{
    return false;
  }
  return (
    <div
      className="product-display">
      <div>
        <Snackbar
          // open={setOpen}
          autoHideDuration={3000}
          // onClose={setOpen}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            // onClose={setOpen}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Successfully Added To Cart
          </Alert>
        </Snackbar>
      </div>

      <div className="save-price">
        <input
          type="hidden"
          value="Discount"
          id="snowplow_offer_type_10000266"
          autoComplete="off"
        />
        <div className="ng-scope">
          <div>
            GET <span className="ng-binding">{product.discount}</span>% OFF
            <span className="asterisk-icon"></span>
          </div>
        </div>
      </div>

      <div className="pic-brand-name">
        <img src={product.photo[0]} alt="" />
        <div>
          <div>
            <p className="brand">{product.brand}</p>
            <p className="name">{product.name}</p>
          </div>
          <div className="weight">1 {product.quantityType}</div>
        </div>
      </div>

      <div className="price-details">
        <div qa="price" className="po-markup">
          <h5>
            <span>MRP: </span>
          </h5>
          <h4>
            <span className="mp-price">
              Rs <span>{product.mrp} </span>
            </span>
            <span className="discnt-price">
              Rs <span>{product.price}</span>
            </span>
          </h4>
        </div>

        <div>
          {product.stock === 0 ? (
            <>
              <br />
              <button className="notify-btn">Notify Me</button>
            </>
          ) : (
            <>
              <p className="ptag">
                <span className="exp-icon"></span>

                <span className="delivery">
                  Standard Delivery: Tomorrow 8:00AM - 10:00AM
                </span>
              </p>
              <br />
              <br />

              {product.length === 0 ? (
                <span className="qty-card-span  qty-card-span-1">
                  <button
                    className="min-btn"
                    
                  >
                    <i className="fa fa-minus" style={{ fontSize: "10px" }}></i>
                  </button>
                  <button className="add-to-cart-btn add-to-cart-btn-1">
                    {1} in basket
                  </button>
                  <button
                    className="max-btn"
                    
                  >
                    <i className="fa fa-plus" style={{ fontSize: "10px" }}></i>
                  </button>
                </span>
              ) : (
                <span className="qty-card-span">
                  <button className="btn-qty">Qty</button>
                  <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    
                    // onChange={}
                  />

                  <button
                    className="add-to-cart-btn"
                    // onClick={() => addtocart(product._id)}
                    // disabled={products.length !== 0 ? true : false}
                  >
                    <span>{product.length === 0 ? "Added" : "Add"}</span>
                    <span className="bskt-icon"></span>
                  </button>
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
