import { Search } from "lucide-react"
import { Card } from "ui/Card"
import { Input } from "ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "ui/Select"

const Dashboard = () => {

    return (
        <div className="space-y-6">
            <div className="flex justify-between pt-40 px-20">
                <div className="items-center">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold text-foreground">Cars & Bikes on rent</h1>
                        <p className="text-sm text-muted-foreground">View & rent services</p>
                    </div>
                    <Card className="px-10 py-5 shadow-sm transition-shadow hover:shadow-md rounded-xl bg-white grid grid-cols-2 gap-4">
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
                    </Card>
                </div>
                <div>
                    <img src="./banner_car.png" className="h-72" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard