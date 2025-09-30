import Card from '@/components/Card'
import Button from "@/components/button";

const Landing: React.FC = () => {
    return (
        <div>
            < h1 className="text-xl font-extralight" > Landing Page</h1 >
            < Card />
            <Card />
            <Button title="small button 1" style="border, text-sm px-3 my-2 bg-pink-300 rounded-sm" />
            <Button title="meidum button 2" style="border, text-md px-3 mb-2 bg-green-200 rounded-md" />
            <Button title="Large Button 3" style="border, text-lg px-3 bg-yellow-200 rounded-full" />
        </div >
    )
}
export default Landing;