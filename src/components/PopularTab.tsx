import { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PopularTours() {
    const [favorites, setFavorites] = useState<any>([]);

    const tours = [
        {
            id: 1,
            title: "Desert Safari with BBQ Dinner",
            location: "Dubai Desert",
            image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&q=80",
            rating: 4.8,
            price: 89,
            originalPrice: 120
        },
        {
            id: 2,
            title: "Burj Khalifa At The Top",
            location: "Downtown Dubai",
            image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80",
            rating: 4.9,
            price: 145,
            originalPrice: 165
        },
        {
            id: 3,
            title: "Luxury Yacht Marina Cruise",
            location: "Dubai Marina",
            image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
            rating: 4.7,
            price: 199,
            originalPrice: 250
        },
        {
            id: 4,
            title: "Hot Air Balloon Experience",
            location: "Dubai Desert",
            image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=600&q=80",
            rating: 5.0,
            price: 299,
            originalPrice: 350
        },
        {
            id: 5,
            title: "Abu Dhabi City Tour",
            location: "Abu Dhabi",
            image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80",
            rating: 4.6,
            price: 75,
            originalPrice: 95
        },
        {
            id: 6,
            title: "Dubai Aquarium & Underwater Zoo",
            location: "Dubai Mall",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
            rating: 4.5,
            price: 65,
            originalPrice: 80
        },
        {
            id: 7,
            title: "Palm Jumeirah Helicopter Tour",
            location: "Atlantis Dubai",
            image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=600&q=80",
            rating: 4.9,
            price: 180,
            originalPrice: 190
        },
        {
            id: 8,
            title: "Dubai Miracle Garden Tour",
            location: "Al Barsha",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
            rating: 4.7,
            price: 55,
            originalPrice: 70
        }
    ];

    const toggleFavorite = (tourId: any) => {
        setFavorites((prev: any) =>
            prev.includes(tourId)
                ? prev.filter((id: any) => id !== tourId)
                : [...prev, tourId]
        );
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">Popular Tours</h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors">
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tours.map((tour) => (
                        <div key={tour.id} className="group cursor-pointer">
                            {/* Image */}
                            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(tour.id)}
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                                >
                                    <Heart
                                        className={`w-5 h-5 ${favorites.includes(tour.id)
                                            ? 'fill-red-500 text-red-500'
                                            : 'text-gray-700'
                                            }`}
                                    />
                                </button>

                                {/* Price Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        {tour.originalPrice > tour.price && (
                                            <span className="text-sm text-gray-400 line-through">${tour.originalPrice}</span>
                                        )}
                                        <span className="text-lg font-bold text-gray-900">${tour.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">{tour.location}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {tour.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                        View All Tours
                    </button>
                </div>
            </div>
        </div>
    );
}