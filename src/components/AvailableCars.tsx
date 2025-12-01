import { cars } from "data/constantsData"
import { Filter, Search } from "lucide-react"
import { Card, CardContent } from "ui/Card"
import { Input } from "ui/Input"

const AvailableCars = () => {
    return (
        <div className="space-y-6">
            <div className="px-96 py-20">
                <h1 className="text-2xl font-bold text-foreground">Available Cars</h1>
                <p className="text-sm text-muted-foreground">Browse our selection of premium vehicles available for your next adventure</p>
                <div className="relative flex-1 mt-4">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by location..."
                        className="pl-9"
                    />
                    <Filter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
            </div>
            <div>
                <h3 className="text-lg">show results</h3>
                <div className="grid grid-cols-3 gap-6 mt-3">
                    {cars.map((car) => (
                        <Card key={car.id} className="overflow-hidden shadow-sm hover:shadow-md transition">
                            <div className="relative">
                                <img
                                    src={car.image}
                                    alt={car.model}
                                    className="w-full h-40 object-cover"
                                />

                                <span
                                    className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md text-white ${car.available ? "bg-green-600" : "bg-red-500"
                                        }`}
                                >
                                    {car.available ? "Available" : "Not Available"}
                                </span>

                                <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-md">
                                    ₹{car.pricePerDay}/day
                                </span>
                            </div>

                            <CardContent className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {car.location}
                                </p>

                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>Seats: {car.seats}</p>
                                    <p>Fuel: {car.fuel}</p>
                                    <p>Transmission: {car.transmission}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AvailableCars