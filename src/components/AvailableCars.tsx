import { Filter, Search } from "lucide-react"
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
        </div>
    )
}

export default AvailableCars