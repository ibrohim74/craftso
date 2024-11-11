import Home from "../pages/home/home.jsx";
import About from "../pages/about/about.jsx";
import Contact from "../pages/contact/contact.jsx";
import Products from "../pages/products/products.jsx";

export const HOME = "/"
export const ABOUT = "/about"
export const CONTACT = "/contact"
export const PRODUCTS = "/products"


export const PublicRoutes =[
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:ABOUT,
        Component:About
    },
    {
        Path:CONTACT,
        Component:Contact
    },
    {
        Path:PRODUCTS,
        Component:Products
    },
]