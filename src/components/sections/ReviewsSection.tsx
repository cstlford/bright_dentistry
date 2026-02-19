"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const REVIEWS = [
  {
    name: "Goldstar M.",
    date: "Verified Patient",
    rating: 5,
    avatar: "GM",
    color: "bg-[#237E7B]",
    review:
      "My Mother is 90 years old. Dr. Habib has been taking care of my Mother's oral issues. She has given her a new bridge and saved two of her teeth with fillings. She is kind to my Mother who has dementia and takes great care to make her feel secure. My Mother and I are very fortunate to have been Dr. Habib's patient. She has been a God wink for us!",
    service: "Family Dentistry",
  },
  {
    name: "Anonymous",
    date: "Verified Patient",
    rating: 5,
    avatar: "★",
    color: "bg-[#1A5C59]",
    review:
      "I absolutely loved the experience. Dr. Habib was so understanding. I would be happy to go again. She is a great dentist who I strongly recommend to anyone feeling nervous or anxious at first. Thank you!",
    service: "General Care",
  },
  {
    name: "Melissa Arnold",
    date: "Verified Patient",
    rating: 5,
    avatar: "MA",
    color: "bg-[#2FA8A5]",
    review:
      "Thank you, Dr. Habib. I had the best experience with you and your staff. You sat down with me and gave me the most thorough consultation I've ever had. You made it easy for me to understand my treatment plan. By the time I left, I felt very comfortable with you and my hygienist.",
    service: "Consultation",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < count ? "#F59E0B" : "none"}
          stroke={i < count ? "#F59E0B" : "#D1D5DB"}
          strokeWidth="1.5"
          className="w-4 h-4"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
              Patient Stories
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            What Our Patients <span className="text-[#237E7B]">Are Saying</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-gray-500 text-sm font-medium ml-1">
              4.9 average · 20+ reviews
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`relative bg-[#F7F9F9] rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-[#237E7B]/10 font-display text-8xl font-bold leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      {/* Stars + service badge */}
      <div className="flex items-start justify-between mb-4">
        <Stars count={review.rating} />
        <span className="text-xs bg-[#E8F4F4] text-[#237E7B] font-medium px-2.5 py-1 rounded-full">
          {review.service}
        </span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
        &ldquo;{review.review}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div
          className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {review.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.date}</p>
        </div>
        {/* Google logo */}
        <div className="ml-auto opacity-50">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
