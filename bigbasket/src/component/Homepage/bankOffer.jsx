
import { SliderDown } from "./Slider_config";
import { FeatureSection } from "./Slider_config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";


export const HomepageMainBody = () => {
  const [sellers, setSellers] = useState([]);

  
  useEffect(() => {
    const dummy=[{
      "_id": {
        "$oid": "62419f54eef268a2af502d3d"
      },
      "name": "Mushrooms - Button",
      "description": "Buttom mushrooms are very small sized mushrooms with smooth round caps and short stems. They have a mild flavour with a good texture that becomes more fragrant and meaty when cooked.",
      "price": 40,
      "mrp": 50,
      "discount": 20,
      "category": "fruits-vegetables",
      "stock": 50,
      "brand": "fresho",
      "superSaver": true,
      "quantityType": "kg",
      "season": "winter",
      "country": "india",
      "createdAt": {
        "$date": {
          "$numberLong": "1648467796152"
        }
      },
      "updatedAt": {
        "$date": {
          "$numberLong": "1648467796152"
        }
      },
      "photo": [
        "https://www.bigbasket.com/media/uploads/p/l/10000273_16-fresho-mushrooms-button.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000273-2_19-fresho-mushrooms-button.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000025-5_1-fresho-banana-robusta.jpg"
      ]
    },{
      "_id": {
        "$oid": "62419f93eef268a2af502d3f"
      },
      "name": "Fresho Lettuce - Iceberg",
      "description": "Iceberg lettuce is a variety of lettuce with crisp leaves which grows in a spherical head resembling a cabbage. The leaves on the outside tend to be green and the leaves in the center go from pale yellow to nearly whitish as you move closer and closer to the center of the head with the sweetest leaves in the center of the head.",
      "price": 44,
      "mrp": 55,
      "discount": 20,
      "category": "fruits-vegetables",
      "stock": 80,
      "brand": "fresho",
      "superSaver": false,
      "quantityType": "kg",
      "season": "summer",
      "country": "america",
      "createdAt": {
        "$date": {
          "$numberLong": "1648467859098"
        }
      },
      "updatedAt": {
        "$date": {
          "$numberLong": "1648467859098"
        }
      },
      "photo": [
        "https://www.bigbasket.com/media/uploads/p/l/10000133_14-fresho-lettuce-iceberg.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000133-2_7-fresho-lettuce-iceberg.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000133-3_1-fresho-lettuce-iceberg.jpg"
      ]
    },{
      "_id": {
        "$oid": "6241a131eef268a2af502d47"
      },
      "name": "Aashirvaad Atta/Godihittu - Whole Wheat",
      "description": "Aashirvaad whole wheat atta is made of zero per cent maida and 100% atta, which makes it extremely nutritious since its packed with health benefits. This also means more fluffy and soft rotis at home. Aashirvaad Atta is also made from the best grains - heavy on the palm, golden amber in colour and hard in bite. It is grounded using the chakki - grinding process for the perfect balance of colour, taste and nutrition.",
      "price": 38.7,
      "mrp": 49.9,
      "discount": 22,
      "category": "foodgrains-oil-masala",
      "stock": 10000,
      "brand": "aashirvaad",
      "superSaver": true,
      "quantityType": "kg",
      "season": "winter",
      "country": "india",
      "createdAt": {
        "$date": {
          "$numberLong": "1648468273972"
        }
      },
      "updatedAt": {
        "$date": {
          "$numberLong": "1648468273972"
        }
      },
      "photo": [
        "https://www.bigbasket.com/media/uploads/p/l/126906_7-aashirvaad-atta-whole-wheat.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/126906-2_7-aashirvaad-atta-whole-wheat.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/126906-4_7-aashirvaad-atta-whole-wheat.jpg"
      ]
    },{
      "_id": {
        "$oid": "62419fc6eef268a2af502d41"
      },
      "name": "Fresho Banana - Robusta",
      "description": "Relish the soft, buttery texture of Robusta bananas that are light green and have a great fragrance and taste. The stalks of Robustas are thick and rigid. Fresh fruits are green, which revolve to a bright yellow on ripening and the flesh contains a white - ceramic colour.",
      "price": 37.8,
      "mrp": 47.25,
      "discount": 20,
      "category": "fruits-vegetables",
      "stock": 1000,
      "brand": "fresho",
      "superSaver": true,
      "quantityType": "kg",
      "season": "winter",
      "country": "india",
      "createdAt": {
        "$date": {
          "$numberLong": "1648467910317"
        }
      },
      "updatedAt": {
        "$date": {
          "$numberLong": "1648467910317"
        }
      },
      "photo": [
        "https://www.bigbasket.com/media/uploads/p/l/10000025_27-fresho-banana-robusta.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000025-2_3-fresho-banana-robusta.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000025-3_3-fresho-banana-robusta.jpg"
      ]
    },{
      "_id": {
        "$oid": "6241a01ceef268a2af502d43"
      },
      "name": "Baby Apple Shimla",
      "description": "The apple flesh is greenish white and grained, and it tastes sweet and juicy. The crispiness and the aroma of the apples make it more attractive. Apples are best when it is consumed fresh after meals or as a healthy snack for kids.",
      "price": 209,
      "mrp": 261.25,
      "discount": 20,
      "category": "fruits-vegetables",
      "stock": 100,
      "brand": "fresho",
      "superSaver": true,
      "quantityType": "kg",
      "season": "summer",
      "country": "india",
      "createdAt": {
        "$date": {
          "$numberLong": "1648467996304"
        }
      },
      "updatedAt": {
        "$date": {
          "$numberLong": "1648467996304"
        }
      },
      "photo": [
        "https://www.bigbasket.com/media/uploads/p/l/40134281_11-fresho-baby-apple-shimla.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/40134281-2_1-fresho-baby-apple-shimla.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/40134281-3_1-fresho-baby-apple-shimla.jpg"
      ]
    }]
    // axios.get(`/products/sellers`).then((data) => {
    //   setSellers(data.data);
    // });
    setSellers(dummy);
  }, []);
  

  return (
    <FeatureSection>
      

      <h2>Bank Offers</h2>
      <Container
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/325a886d-f7ba-4f20-a692-f41d8f8311b2/t1_hp_aff_m_paytm_360_260922.jpg "

        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/325a886d-f7ba-4f20-a692-f41d8f8311b2/t1_hp_aff_m_kotak_360_280922.jpg"

        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/325a886d-f7ba-4f20-a692-f41d8f8311b2/t1_hp_aff_m_rbl_360_260922.jpg"

        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/325a886d-f7ba-4f20-a692-f41d8f8311b2/t1_hp_m_aff_dbs_360_260922.jpg"
      />

<h2>Best Sellers</h2>
      <ul className="best-sellers">
        {sellers.map((product,i) => (
          <li className="best-seller-product" key={product._id}>
            <AllProducts product={product} key={i} />
          </li>
        ))}
      </ul>

      <h2>Most Popular</h2>
      <Container
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_04.jpg"
      />

      <h2>Top Offers</h2>
      <Container
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_04.jpg"
      />

      <h2>Fruits and Vegetables</h2>
      <CompactFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/5548722b-d718-44bd-a189-a5bc894c19c1/hp_organic-fruits-fnvStorefront_m_250922_560x378_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/5548722b-d718-44bd-a189-a5bc894c19c1/hp_fresh-fruits-fnvStorefront_m_250922_275x184_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-fresh-veggs-Storefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/5548722b-d718-44bd-a189-a5bc894c19c1/hp_cuts-sprouts-fnvStorefront_m_250922_275x184_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/5548722b-d718-44bd-a189-a5bc894c19c1/hp_exotic-fruits-fnvStorefront_m_250922_275x184_05.jpg"
      />

      <h2>Your Daily Staples</h2>
      <CompactStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_05.jpg"
        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_06.jpg"
      />

      <h2>Beverages</h2>
      <CompactFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_05.jpg"
      />

      <h2>Snacks Store</h2>
      <Container
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_04.jpg"
      />

      <h2>Cleaning &amp; Household</h2>
      <Container
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_04.jpg"
      />

      <h2>Beauty and Hygiene</h2>
      <CompactFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-summer-deos-Storefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-20-off-Storefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-40-off-Storefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-makeup-mania-summer-edit-Storefront_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-shaveing-Storefront_m_250322_05.jpg"
      />

      <h2>Home and Kitchen</h2>
      <CompactStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_under-149-GMStorefront(Till10th)_m_250922_01.jpg"

        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_150-299-GMStorefront(Till10th)_m_250922_02.jpg"

        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_spooja-needs-GMStorefront(Till10th)_m_250922_03.jpg"

        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_dineware-GMStorefront(Till10th)_m_250922_04.jpg"

        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_cleaning-needs-GMStorefront(Till10th)_m_250922_05.jpg"

        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c8c0b982-8bbf-434f-aeac-cc9c07a7029a/0e7228e0-c858-434d-949b-c3b14e8f3de7/hp_kitchem-tools-GMStorefront(Till10th)_m_250922_06.jpg"
      />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_babycare_250322_400.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_petstore_250322_400.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250322_400.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_health_suppliment_250322_400.jpg"
              alt="Fourth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <SliderDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <SliderDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h2>Brand Store</h2>
      <CompactStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_05.jpg"
        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_06.jpg"
      />
      
      <div style={{textAlign:"left"}} className="store-info-box">
        <h3 style={{lineHeight:"1.9"}}>bigbasket - online grocery store</h3>
        <p>
          Did you ever imagine that the freshest of
          <b> fruits and vegetables </b>, top quality pulses and food grains,{" "}
          <b> dairy products </b> and hundreds of branded items could be
          handpicked and delivered to your home, all at the click of a button?
          India's first comprehensive online megastore, bigbasket.com, brings a
          whopping 20000+ products with more than 1000 brands, to over 4 million
          happy customers. From household cleaning products to beauty and
          makeup, bigbasket has everything you need for your daily needs.
          bigbasket.com is convenience personified We've taken away all the
          stress associated with shopping for daily essentials, and you can now
          order all your household products and even buy groceries online
          without travelling long distances or standing in serpentine queues.
          Add to this the convenience of finding all your requirements at one
          single source, along with great savings, and you will realize that
          bigbasket- India's largest online supermarket, has revolutionized the
          way India shops for groceries. Online grocery shopping has never been
          easier. Need things fresh? Whether it's fruits and vegetables or dairy
          and meat, we have this covered as well! Get fresh eggs, meat, fish and
          more online at your convenience. Hassle-free Home Delivery options
        </p>
        <p>
          We deliver to 25 cities across India and maintain excellent delivery
          times, ensuring that all your products from groceries to snacks
          <b> branded foods </b> reach you in time.
        </p>
        <ul>
          <li>
            Slotted Delivery: Pick the most convenient delivery slot to have
            your grocery delivered. From early morning delivery for early birds,
            to late-night delivery for people who work the late shift, bigbasket
            caters to every schedule.
          </li>
          <li>
            Express Delivery: This super useful service can be availed by
            customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata,
            Hyderabad and Delhi-NCR in which we deliver your orders to your
            doorstep in 90 Minutes.
          </li>
          <li>
            BB Specialty stores: Missed out on buying that essential item from
            your favorite neighborhood store for tonight's party? We'll deliver
            it for you! From bakery, sweets and meat to flowers and chocolates,
            we deliver your order in 90 minutes, through a special arrangement
            with a nearby specialty store, verified by us.
          </li>
        </ul>
        <button
          onClick={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        >
          Read More...
        </button>
        <div className="read-more"><br></br>
          <h4 style={{lineHeight:"1.9"}}>India's biggest Online Supermarket</h4>
          <p>
            bigbasket.com believes in providing the highest level of customer
            service and is continuously innovating to meet customer
            expectations. Our On-time Guarantee is one such assurance where we
            refund 5% of the bill value if the delivery is delayed (however, due
            to the pandemic caused by Covid-19 our delivery might get delayed.
            Delivery Guarantee will not be applicable). For all your order
            values above Rs. 1200, we provide free delivery. A wide range of
            imported and gourmet products are available through our express
            delivery and slotted delivery service. If you ever find an item
            missing on delivery or want to return a product, you can report it
            to us within 48 hours for a 'no-questions-asked' refund.
          </p>
          <p>Best quality products for our quality-conscious customers.</p>
          <p>
            bigbasket.com is synonymous with superior quality and continues to
            strive for higher levels of customer trust and confidence, by taking
            feedback and giving our customers what they want. We have added the
            convenience of pre-cut fruits in our Fresho range. If it's a product
            category you're looking to shop from, we've made it convenient for
            you to access all products in a section easily. For instance, if
            you're looking for beverages, you can order from a long list of
            <b> beverages </b>
            that include cool drinks, hot teas, fruit juices and more.
          </p>
          <p>
            We are proud to be associated closely with the farmers from whom we
            source our fresh products. Most of our farm-fresh products are
            sourced directly from farmers, which not only ensures the best
            prices and freshest products for our customers but also helps the
            farmers get better prices. With more than 80 Organic Fruits and
            Vegetables and a wide range of organic staples, bigbasket has the
            largest range in the organic products category.
          </p>
          <p>
            When it comes to payment, we have made it easy for our customers can
            pay through multiple payment channels like Credit and Debit cards,
            Internet Banking, e-wallets and Sodexo passes or simply pay Cash on
            Delivery (COD).The convenience of shopping for home and daily needs,
            while not compromising on quality, has made bigbasket.com the online
            supermarket of choice for thousands of happy customers across India.
          </p>
        </div>
      </div>
    </FeatureSection>
  );
};

const Container = ({ img1, img2, img3, img4 }) => {
  return (
    <>
      <div className="wrapperer">
        <div>
          <img src={img1} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img2} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img3} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img4} alt="offers" width="270px" />
        </div>
      </div>
    </>
  );
};

const CompactFruit = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <>
      <div className="wrapperer fruits-veg">
        <div>
          <img src={img1} alt="offers" />
        </div>
        <div className="small-wrapper">
          <div>
            <img src={img2} alt="offers" width="48%" />
          </div>
          <div>
            <img src={img3} alt="offers" />
          </div>
          <div>
            <img src={img4} alt="offers" />
          </div>
          <div>
            <img src={img5} alt="offers" />
          </div>
        </div>
      </div>
    </>
  );
};

const CompactStaple = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (
    <>
      <div className="wrapperer staples">
        <div>
          <img src={img1} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img2} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img3} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img4} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img5} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img6} alt="offers" width="270px" />
        </div>
      </div>
    </>
  );
};
