export const Desktop = () => {
    return (
        <div className="flex flex-col md:items-start items-center py-5">
            <span className="uppercase my-3">Top Destinations</span>
            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-x-9 gap-y-3 w-full">
                {
                    destinations.map((item, index) => {
                        return <span className="text-md text-blue-400 md:text-start text-center cursor-pointer">{item.title}</span>
                    })
                }
            </div>
        </div>
    )
}

const destinations = [
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
    {
        title: 'Hotels in Las Vegas',
    },
]