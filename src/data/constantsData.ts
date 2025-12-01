export const menuLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My bookings", path: "/my-bookings" },
]

export const cars = [
    {
        id: 1,
        image: "./placeholder.svg",
        model: "Model S",
        brand: "Tesla",
        seats: 5,
        fuel: "Electric",
        location: "Bangalore",
        transmission: "Automatic",
        available: true,
        pricePerDay: 4500
    },
    {
        id: 2,
        image: "./placeholder.svg",
        model: "Creta",
        brand: "Hyundai",
        seats: 5,
        fuel: "Petrol",
        location: "Hyderabad",
        transmission: "Automatic",
        available: false,
        pricePerDay: 2200
    },
    {
        id: 3,
        image: "./placeholder.svg",
        model: "Innova HyCross",
        brand: "Toyota",
        seats: 7,
        fuel: "Hybrid",
        location: "Chennai",
        transmission: "Semi-Auto",
        available: true,
        pricePerDay: 3500
    }
];