require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("CORS not allowed"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// app.use(cors())
app.use(express.json())

const PerfumesRoutes = require("./routes/PerfumesRoutes")
const UsersRoutes = require("./routes/UsersRoutes")
const OrdersRoutes = require("./routes/OrdersRoutes")
const OrderItemsRoutes = require("./routes/OrderItemsRoutes");
const CartRoutes = require("./routes/CartRoutes")

app.use("/product", PerfumesRoutes)
app.use("/user", UsersRoutes)
app.use("/orders", OrdersRoutes)
app.use("/order-items", OrderItemsRoutes)
app.use("/cart", CartRoutes)

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});