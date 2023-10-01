import multer from "multer";

// Create Destination

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "staffPhoto") {
      cb(null, "public/staff");
    } else if (file.fieldname === "userPhoto") {
      cb(null, "public/user");
    } else if (file.fieldname === "customerPhoto") {
      cb(null, "public/customer");
    } else if (file.fieldname === "productPhoto") {
      cb(null, "public/product");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random() * 1000) +
        "_" +
        file.originalname
    );
  },
});

// Create Storage
export const createCustomerMulter = multer({ storage }).single("customerPhoto");

export const createProductMulter = multer({ storage }).single("productPhoto");
