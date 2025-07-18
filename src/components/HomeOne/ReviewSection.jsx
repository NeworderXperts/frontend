import React from "react";
// import Review from "./Review";

import image1 from './1.webp';
import image2 from './2.webp';
import image3 from './3.webp';
import image4 from './4.webp';

export default function ReviewSection() {
    const reviews = [
        {
            name: "John Doe",
            restaurantName: "Spicy Bites",
            message: "Amazing service and fast delivery!",
            imageLink: image1,
        },
        {
            name: "Jane Smith",
            restaurantName: "Urban Grill",
            message: "The food was delicious and the app made it so easy to order.",
            imageLink: image2,
        },
        {
            name: "Michael King",
            restaurantName: "Green Spoon",
            message: "Table reservations and order ahead work perfectly!",
            imageLink: image3,
        },
        {
            name: "Amelia White",
            restaurantName: "Ocean Dine",
            message: "Very smooth experience. Our customers love it!",
            imageLink: image4,
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">What Our Clients Say</h2>
            <div className="row">
                {reviews.map((review, index) => (
                    <Review
                        key={index}
                        name={review.name}
                        restaurantName={review.restaurantName}
                        message={review.message}
                        imageLink={review.imageLink}
                    />
                ))}
            </div>
        </div>
    );
}
