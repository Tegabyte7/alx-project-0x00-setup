import Card from '@/components/Card'


const Landing: React.FC = () => {
    return (
        <div className="grid grid-cols-2">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />

        </div >
    )
}
export default Landing;