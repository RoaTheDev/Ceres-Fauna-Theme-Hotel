export const bookings = [
    {
        id: 1,
        guest: "John Doe",
        room: "Garden View Suite",
        checkIn: "2024-01-15",
        checkOut: "2024-01-18",
        status: "confirmed"
    },
    {
        id: 2,
        guest: "Jane Smith",
        room: "Forest Retreat Room",
        checkIn: "2024-01-20",
        checkOut: "2024-01-23",
        status: "pending"
    },
    {
        id: 3,
        guest: "Bob Johnson",
        room: "Nature's Embrace Family Suite",
        checkIn: "2024-01-25",
        checkOut: "2024-01-30",
        status: "checked-in"
    }
];

export const rooms = [
    {id: 1, name: "Garden View Suite", status: "available", price: 299, lastCleaned: "2024-01-14"},
    {id: 2, name: "Forest Retreat Room", status: "occupied", price: 199, lastCleaned: "2024-01-13"},
    {id: 3, name: "Nature's Embrace Family Suite", status: "maintenance", price: 449, lastCleaned: "2024-01-12"},
    {id: 4, name: "Botanical Luxury Villa", status: "available", price: 699, lastCleaned: "2024-01-14"}
];

export const amenities = [
    {id: 1, name: "Botanical Spa & Wellness", status: "open", capacity: 20, currentGuests: 8},
    {id: 2, name: "Garden Restaurant", status: "open", capacity: 80, currentGuests: 45},
    {id: 3, name: "Nature Pool & Deck", status: "open", capacity: 50, currentGuests: 12},
    {id: 4, name: "Fitness & Yoga Pavilion", status: "maintenance", capacity: 30, currentGuests: 0}
];