import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { cn } from '@/lib/utils';

interface DateRangePickerProps {
    onDateChange?: (checkIn: Date | undefined, checkOut: Date | undefined) => void;
    className?: string;
}

const DateRangePicker = ({ onDateChange, className }: DateRangePickerProps) => {
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(addDays(new Date(), 1));
    const [checkInOpen, setCheckInOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);

    const handleCheckInSelect = (date: Date | undefined) => {
        setCheckInDate(date);
        if (date && checkOutDate && date >= checkOutDate) {
            const newCheckOut = addDays(date, 1);
            setCheckOutDate(newCheckOut);
            onDateChange?.(date, newCheckOut);
        } else {
            onDateChange?.(date, checkOutDate);
        }
        setCheckInOpen(false);
    };

    const handleCheckOutSelect = (date: Date | undefined) => {
        setCheckOutDate(date);
        onDateChange?.(checkInDate, date);
        setCheckOutOpen(false);
    };

    const today = new Date();
    const minCheckOut = checkInDate ? addDays(checkInDate, 1) : addDays(today, 1);

    return (
        <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
            <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Check-in Date</label>
                <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal border-gray-200 hover:border-gray-300",
                                !checkInDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkInDate ? format(checkInDate, "MMM dd, yyyy") : "Select date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto p-0"
                        align="start"
                    >
                        <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={handleCheckInSelect}
                            disabled={(date) => date < today}
                            className="pointer-events-auto"
                            showOutsideDays={true}
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Check-out Date</label>
                <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal border-gray-200 hover:border-gray-300",
                                !checkOutDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOutDate ? format(checkOutDate, "MMM dd, yyyy") : "Select date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto p-0"
                        align="start"
                    >
                        <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={handleCheckOutSelect}
                            disabled={(date) => date < minCheckOut}
                            className="pointer-events-auto"
                            showOutsideDays={true}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default DateRangePicker;