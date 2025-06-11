import  { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface RoomSearchFilterProps {
    onSearch: (query: string) => void;
    onFilter: (filters: FilterOptions) => void;
    onClearFilters: () => void;
}
type FilterValue = string | string[];
export interface FilterOptions {
    priceRange: string;
    capacity: string;
    features: string[];
}

const RoomSearchFilter = ({ onSearch, onFilter, onClearFilters }: RoomSearchFilterProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<FilterOptions>({
        priceRange: '',
        capacity: '',
        features: []
    });
    const [showFilters, setShowFilters] = useState(false);

    const handleSearch = (value: string) => {
        setSearchQuery(value);
        onSearch(value);
    };

    const handleFilterChange = (key: keyof FilterOptions, value: FilterValue) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilter(newFilters);
    };

    const toggleFeature = (feature: string) => {
        const newFeatures = filters.features.includes(feature)
            ? filters.features.filter(f => f !== feature)
            : [...filters.features, feature];
        handleFilterChange('features', newFeatures);
    };

    const clearAllFilters = () => {
        setFilters({ priceRange: '', capacity: '', features: [] });
        setSearchQuery('');
        onClearFilters();
    };

    const availableFeatures = ['King Size Bed', 'Queen Size Bed', 'Garden View', 'Forest View', 'Private Balcony', 'Mini Bar', 'Kitchenette', 'Private Pool'];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fauna-400 h-4 w-4" />
                    <Input
                        placeholder="Search rooms by name or description..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pl-10 border-fauna-200 focus:border-fauna-400"
                    />
                </div>
                <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="border-fauna-300 text-fauna-700 hover:bg-fauna-50"
                >
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                </Button>
                {(filters.priceRange || filters.capacity || filters.features.length > 0 || searchQuery) && (
                    <Button
                        variant="ghost"
                        onClick={clearAllFilters}
                        className="text-fauna-600 hover:text-fauna-800"
                    >
                        <X className="mr-2 h-4 w-4" />
                        Clear All
                    </Button>
                )}
            </div>

            {showFilters && (
                <div className="mt-6 pt-6 border-t border-fauna-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-fauna-700 mb-2">Price Range</label>
                            <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange('priceRange', value)}>
                                <SelectTrigger className="border-fauna-200">
                                    <SelectValue placeholder="Select price range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0-200">$0 - $200</SelectItem>
                                    <SelectItem value="200-400">$200 - $400</SelectItem>
                                    <SelectItem value="400-600">$400 - $600</SelectItem>
                                    <SelectItem value="600+">$600+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-fauna-700 mb-2">Capacity</label>
                            <Select value={filters.capacity} onValueChange={(value) => handleFilterChange('capacity', value)}>
                                <SelectTrigger className="border-fauna-200">
                                    <SelectValue placeholder="Select capacity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2">Up to 2 guests</SelectItem>
                                    <SelectItem value="4">Up to 4 guests</SelectItem>
                                    <SelectItem value="6">Up to 6 guests</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-fauna-700 mb-2">Features</label>
                        <div className="flex flex-wrap gap-2">
                            {availableFeatures.map((feature) => (
                                <Badge
                                    key={feature}
                                    variant={filters.features.includes(feature) ? "default" : "outline"}
                                    className={`cursor-pointer transition-colors ${
                                        filters.features.includes(feature)
                                            ? 'bg-fauna-500 text-white hover:bg-fauna-600'
                                            : 'border-fauna-300 text-fauna-700 hover:bg-fauna-50'
                                    }`}
                                    onClick={() => toggleFeature(feature)}
                                >
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomSearchFilter;