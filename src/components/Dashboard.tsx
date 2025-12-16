import { Search, SearchIcon } from "lucide-react"
import Button from "ui/Button"
import { Input } from "ui/Input"
import { Card, CardContent } from "ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "ui/Select"

const Dashboard = () => {

    return (
        <div className="space-y-6">
            <div className="flex justify-between pt-40 pb-20 px-20">
                <div className="items-center">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold text-foreground">Cars & Bikes on rent</h1>
                        <p className="text-sm text-muted-foreground">View & rent services</p>
                    </div>
                    <Card className="px-10 py-5 shadow-sm transition-shadow hover:shadow-md rounded-xl bg-white">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">Select mode</p>
                                <Select>
                                    <SelectTrigger className="rounded-full">
                                        <SelectValue placeholder="Select mode" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="BIKE">Bike</SelectItem>
                                        <SelectItem value="CAR">Car</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">Pick up location</p>
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by location..."
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">Pick up date</p>
                                <Input
                                    type="date"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">Return date</p>
                                <Input
                                    type="date"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-5">
                            <Button className="rounded-3xl">
                                <SearchIcon size={18} />
                                <h2>Search</h2>
                            </Button>
                        </div>
                    </Card>
                </div>
                <div>
                    <img src="./banner_car.png" className="h-72" />
                </div>
            </div>
            <div className="px-20">
                <Card className="shadow-sm p-6 transition-shadow hover:shadow-md rounded-xl bg-gradient-to-r from-blue-200 via-blue-300 to-slate-500">
                    <div>
                        <h2 className="text-xl font-semibold">Do You Own a Luxury Car/Bike?</h2>
                        <p className="mt-2">
                            Monetize your vehicle effortlessly by listing it on Auto mobile rental.
                            <p>We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
                        </p>
                        <Button className="mt-2" variant="outline">List your vehicle</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard