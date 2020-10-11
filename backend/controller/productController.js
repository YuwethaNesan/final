const asyncHandler = require("express-async-handler");
const Product = require("../model/productmodel");

//desc Fetch all products
//route GET api/products
//access  public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//desc Fetch single products
//route GET api/products/:id
//access  public

const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).json({ msg: "Product not founded" });
    res.json(product);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Product not founded" });
    }
    res.status(500).send("Server Error");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// desc    Create a product
// route   POST /api/products
// access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// desc    Update a product
// route   PUT /api/products/:id
// access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// desc    Create new review
// route   POST /api/products/:id/reviews
// access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// desc    Get top rated products
// route   GET /api/products/top
// access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});



//my


// router.getCategoryProduct('/', async (req, res) => {
//   const category = req.query.category ? { category: req.query.category } : {};
//   const searchKeyword = req.query.searchKeyword
//     ? {
//         name: {
//           $regex: req.query.searchKeyword,
//           $options: 'i',
//         },
//       }
//     : {};
//   const sortOrder = req.query.sortOrder
//     ? req.query.sortOrder === 'lowest'
//       ? { price: 1 }
//       : { price: -1 }
//     : { _id: -1 };
//   const products = await Product.find({ ...category, ...searchKeyword }).sort(
//     sortOrder
//   );
//   res.send(products);
// });

// router.get('/:id', async (req, res) => {
//   const product = await Product.findOne({ _id: req.params.id });
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found.' });
//   }
// });
// router.post('/:id/reviews', isAuth, async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (product) {
//     const review = {
//       name: req.body.name,
//       rating: Number(req.body.rating),
//       comment: req.body.comment,
//     };
//     product.reviews.push(review);
//     product.numReviews = product.reviews.length;
//     product.rating =
//       product.reviews.reduce((a, c) => c.rating + a, 0) /
//       product.reviews.length;
//     const updatedProduct = await product.save();
//     res.status(201).send({
//       data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
//       message: 'Review saved successfully.',
//     });
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });
// router.put('/:id', isAuth, isAdmin, async (req, res) => {
//   const productId = req.params.id;
//   const product = await Product.findById(productId);
//   if (product) {
//     product.name = req.body.name;
//     product.price = req.body.price;
//     product.image = req.body.image;
//     product.brand = req.body.brand;
//     product.category = req.body.category;
//     product.countInStock = req.body.countInStock;
//     product.description = req.body.description;
//     const updatedProduct = await product.save();
//     if (updatedProduct) {
//       return res
//         .status(200)
//         .send({ message: 'Product Updated', data: updatedProduct });
//     }
//   }
//   return res.status(500).send({ message: ' Error in Updating Product.' });
// });

// router.delete('/:id', isAuth, isAdmin, async (req, res) => {
//   const deletedProduct = await Product.findById(req.params.id);
//   if (deletedProduct) {
//     await deletedProduct.remove();
//     res.send({ message: 'Product Deleted' });
//   } else {
//     res.send('Error in Deletion.');
//   }
// });

// router.post('/', isAuth, isAdmin, async (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     price: req.body.price,
//     image: req.body.image,
//     brand: req.body.brand,
//     category: req.body.category,
//     countInStock: req.body.countInStock,
//     description: req.body.description,
//     rating: req.body.rating,
//     numReviews: req.body.numReviews,
//   });
//   const newProduct = await product.save();
//   if (newProduct) {
//     return res
//       .status(201)
//       .send({ message: 'New Product Created', data: newProduct });
//   }
//   return res.status(500).send({ message: ' Error in Creating Product.' });
// });


//my




module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
};
