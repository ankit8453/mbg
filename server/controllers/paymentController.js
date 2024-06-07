import {instance} from '../server.js';

export const checkout =async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 100),  
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order = await instance.orders.create(options);

      res.status(200).json({
        success: true,
        order,
      });
};

export const paymentVerification =async (req, res) => {
  console.log(req.body);  

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log(" sig received ", razorpay_signature);
  console.log(" sig generated ", expectedSignature)

  res.status(200).json({
      success: true,
    });
};