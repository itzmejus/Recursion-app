import { useState } from 'react';
import { Heart, Share2, MapPin, Clock, Users, Calendar, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ItemDetailpage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&q=80",
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1200&q=80",
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1200&q=80",
        "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1200&q=80"
    ];

    const highlights = [
        "Traditional Bedouin camp experience",
        "Dune bashing in 4x4 vehicle",
        "Camel riding and sandboarding",
        "BBQ dinner with live entertainment",
        "Hotel pickup and drop-off included"
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="hover:text-blue-600 cursor-pointer">Home</span>
                        <span>/</span>
                        <span className="hover:text-blue-600 cursor-pointer">Tours</span>
                        <span>/</span>
                        <span className="text-gray-900">Desert Safari</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Images & Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="relative">
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Desert Safari"
                                    className="w-full h-full object-cover"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-900" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div className="flex gap-3 mt-4">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative w-20 h-20 rounded-lg overflow-hidden ${index === currentImageIndex ? 'ring-2 ring-blue-600' : 'opacity-60 hover:opacity-100'
                                            } transition-all`}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Title & Actions */}
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                                        Desert Safari with BBQ Dinner
                                    </h1>
                                    <div className="flex items-center gap-6 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5" />
                                            <span>Dubai Desert</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold text-gray-900">4.8</span>
                                            <span>(156 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className="p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                                    >
                                        <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                                    </button>
                                    <button className="p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
                                        <Share2 className="w-6 h-6 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">6 Hours</div>
                                <div className="text-sm text-gray-600">Duration</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">Max 15</div>
                                <div className="text-sm text-gray-600">Group Size</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                                <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">Daily</div>
                                <div className="text-sm text-gray-600">Availability</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Experience the magic of the Arabian Desert with our exclusive Desert Safari tour.
                                Enjoy thrilling dune bashing, camel rides, and traditional entertainment under the stars.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This unforgettable adventure includes a delicious BBQ dinner at a Bedouin-style camp,
                                complete with live shows, henna painting, and stunning sunset views. Perfect for families,
                                couples, and adventure seekers alike.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                            <div className="space-y-3">
                                {highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                                            <Check className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="text-sm text-gray-500 line-through">$120</span>
                                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                                            26% OFF
                                        </span>
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900">$89</div>
                                    <div className="text-sm text-gray-600 mt-1">per person</div>
                                </div>

                                {/* Date Selection */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Select Date
                                        </label>
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Guests */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Guests
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs text-gray-600 mb-1">Adults</label>
                                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                                    <button
                                                        onClick={() => setAdults(Math.max(1, adults - 1))}
                                                        className="px-3 py-2 hover:bg-gray-50"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="flex-1 text-center font-semibold">{adults}</span>
                                                    <button
                                                        onClick={() => setAdults(adults + 1)}
                                                        className="px-3 py-2 hover:bg-gray-50"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-600 mb-1">Children</label>
                                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                                    <button
                                                        onClick={() => setChildren(Math.max(0, children - 1))}
                                                        className="px-3 py-2 hover:bg-gray-50"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="flex-1 text-center font-semibold">{children}</span>
                                                    <button
                                                        onClick={() => setChildren(children + 1)}
                                                        className="px-3 py-2 hover:bg-gray-50"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="border-t border-gray-200 pt-4 mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-semibold text-gray-900">
                                            ${89 * (adults + children)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${89 * (adults + children)}</span>
                                    </div>
                                </div>

                                {/* Book Button */}
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors mb-3">
                                    Book Now
                                </button>

                                <p className="text-xs text-center text-gray-500">
                                    Free cancellation up to 24 hours before
                                </p>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                                <div className="text-center mb-4">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">4.8/5</div>
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-600">Based on 156 reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}