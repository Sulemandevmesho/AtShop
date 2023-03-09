const express = require("express");
const multer=require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../sm/frontend/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const {
  getProducts,
  getProductbyId,
  putProduct,
  addProduct,
} = require("../controllers/productController");

//@Get all products
//@routes GET /api/products
//@access public
router.get("/", getProducts);

//@POST product
//@routes POST /api/addproduct
//@access public
router.post("/", upload.single('image'),addProduct);
//@PUT a product by id
//@routes PUT /api/products/put
//@access public
router.put("/", upload.single('image'),putProduct);
//@Get a product by id
//@routes GET /api/products/:id
//@access public

router.get("/:id", getProductbyId);
module.exports = router;
