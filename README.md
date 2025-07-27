# Zocal Food – MERN Food Delivery Web App

A modern food delivery web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project allows users to browse menus, add items to a cart, sign in, and place orders with Stripe payments.

---

## Features

- User authentication (JWT-based)
- Browse food menu and categories
- Add/remove items to cart
- Responsive navbar with icons (Home, Menu, Contact, Cart, Profile)
- Order history and user profile
- Stripe payment integration
- Admin panel (if implemented)
- Responsive design for desktop and mobile

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (local and Atlas)
- **Authentication:** JWT
- **Payments:** Stripe

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Stripe account (for payments)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mern_food_web.git
   cd mern_food_web
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Create a .env file (see below)
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## Environment Variables

Create a `.env` file in the `backend` folder with the following:

```
LOCAL_DB_URL = "mongodb://localhost:27017/foodDelivery"
WEB_MDB_URL = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/foodDelivery"
JWT_SECRET = "<your_jwt_secret>"
STRIPE_SECRET_KEY = "<your_stripe_secret_key>"
```

---

## Folder Structure

```
MERN_food_web/
├── admin/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   └── navbar.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   └── navbar.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── package-lock.json

---

## Usage

- Register or sign in as a user
- Browse the menu and add items to your cart
- Proceed to checkout and pay securely with Stripe
- View your order history and profile

---

## Customization

- Update menu items and categories in the backend
- Change branding and icons in `frontend/src/components/navbar/navbar.jsx`
- Configure environment variables for your deployment

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, contact [your-email@example.com].
