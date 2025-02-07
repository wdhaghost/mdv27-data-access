// models/gamezModel.js
import mongoose from "mongoose";

const gamezSchema = new mongoose.Schema({
  results: {
    product: {
      product_name: {
        type: String,
        required: true,
      },
      product_description: {
        type: String,
      },
      product_price: {
        type: Number,
        required: true,
      },
      product_status: {
        type: String,
        required: true,
        enum: ["available", "unavailable"],
      },
      product_type: {
        type: String,
        required: true,
        enum: ["video game", "board game"],
      },
    },
    seller: {
      seller_name: {
        type: String,
        required: true,
      },
      seller_creation_date: {
        type: Date,
        required: true,
        default: new Date(),
      },
    },
  },
});

// Hook pour ajuster le prix avant l'enregistrement
gamezSchema.pre("save", function (next) {
  if (this.results.product.product_type === "video game") {
    this.results.product.product_price *= 1.1;
  } else {
    this.results.product.product_price *= 1.15;
  }
  next();
});

// Hook pour ajuster le prix lors d'une mise à jour
gamezSchema.pre("findOneAndUpdate", async function (next) {
  const oldProductPrice = this.get("results.product.product_price");
  const object = await this.model.findOne(this.getQuery());
  const hasProductPriceChanged =
    oldProductPrice != object.results.product.product_price;
  if (hasProductPriceChanged) {
    if (object.results.product.product_type === "video game") {
      object.results.product.product_price = oldProductPrice * 1.1;
    } else {
      object.results.product.product_price = oldProductPrice * 1.15;
    }
    await object.save();
  }
  next();
});

export default mongoose.model("produits_gamez", gamezSchema);
