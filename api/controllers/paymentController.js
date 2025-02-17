const Razorpay = require('razorpay');
const Course = require('../models/course');

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Razorpay order for a premium course
exports.createPaymentOrder = async (req, res) => {
    const { courseId } = req.body;

    try {
        // Get course data from database
        const course = await Course.findById(courseId);
        if (!course || !course.premium) {
            return res.status(400).json({ error: "Invalid course" });
        }

        // Razorpay order creation
        const options = {
            amount: course.price * 100, // Razorpay accepts amount in paise (1 INR = 100 paise)
            currency: "INR",
            receipt: `order_rcptid_${new Date().getTime()}`,
            payment_capture: 1
        };

        razorpay.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create order' });
            }

            res.json({
                id: order.id,
                amount: order.amount,
                currency: order.currency
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
