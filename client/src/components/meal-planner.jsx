import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Coffee, UtensilsCrossed, ChefHat } from 'lucide-react'
import { foodData } from '@/data/food.js'

const MealPlanner = () => {
    const [selectedDay, setSelectedDay] = useState('Monday')  

    const handleDayChange = (value) => {
        setSelectedDay(value)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Weekly Meal Planner</h1>

            <div className="mb-8">
                <Select onValueChange={handleDayChange} defaultValue={selectedDay}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Select a day" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(foodData).map((day) => (
                            <SelectItem key={day} value={day}>{day}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MealCard
                    title="Breakfast"
                    icon={<Coffee className="h-6 w-6" />}
                    items={foodData[selectedDay].breakfast}
                />
                <MealCard
                    title="Lunch"
                    icon={<UtensilsCrossed className="h-6 w-6" />}
                    items={foodData[selectedDay].lunch}
                />
                <MealCard
                    title="Dinner"
                    icon={<ChefHat className="h-6 w-6" />}
                    items={foodData[selectedDay].dinner}
                />
            </div>
        </div>
    )
}

function MealCard({ title, icon, items }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default MealPlanner
