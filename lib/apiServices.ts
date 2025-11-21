// Comprehensive API Services Data - 10+ unique + 7+ common services

export interface APIService {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  useCases: string[];
  price?: string;
}

export const musicAndMediaAPIs: APIService[] = [
  {
    id: "spotify",
    name: "Spotify API",
    description: "Stream, search, and manage music playback with full catalog access",
    icon: "🎵",
    category: "Music & Media",
    features: ["Music Streaming", "Search Library", "Playlist Management", "User Authentication"],
    useCases: ["Instagram Reels", "TikTok Integration", "Music Apps", "Social Feeds"],
    price: "Free + Premium"
  },
  {
    id: "youtube",
    name: "YouTube Data API",
    description: "Access YouTube videos, channels, playlists and manage content",
    icon: "🎬",
    category: "Music & Media",
    features: ["Video Search", "Channel Management", "Playlist API", "Analytics"],
    useCases: ["Video Streaming Apps", "Content Aggregation", "Live Streaming", "Social Media"],
    price: "Free Tier Available"
  },
  {
    id: "soundcloud",
    name: "SoundCloud API",
    description: "Integrate independent music and audio content discovery",
    icon: "☁️",
    category: "Music & Media",
    features: ["Audio Streaming", "Artist Discovery", "Track Metadata", "User Profiles"],
    useCases: ["Music Platforms", "Radio Apps", "Podcasts", "Audio Content"],
    price: "Freemium"
  },
  {
    id: "lastfm",
    name: "Last.fm API",
    description: "Music scrobbling, recommendations, and user listening history",
    icon: "📊",
    category: "Music & Media",
    features: ["Music Scrobbling", "Recommendations", "Artist Info", "User History"],
    useCases: ["Music Discovery", "Stats Apps", "Recommendations", "Social Sharing"],
    price: "Free"
  },
  {
    id: "genius",
    name: "Genius API",
    description: "Song lyrics, annotations, and music metadata access",
    icon: "📝",
    category: "Music & Media",
    features: ["Lyrics Database", "Song Search", "Artist Info", "Web Scraping"],
    useCases: ["Lyrics Apps", "Music Education", "Karaoke Apps", "Content Discovery"],
    price: "Free"
  },
  {
    id: "audiodb",
    name: "TheAudioDB API",
    description: "Comprehensive music database with artist and album information",
    icon: "🎸",
    category: "Music & Media",
    features: ["Artist Database", "Album Info", "Artwork", "Music Metadata"],
    useCases: ["Music Libraries", "Artist Profiles", "Album Covers", "Music Discovery"],
    price: "Free"
  },
  {
    id: "musicbrainz",
    name: "MusicBrainz API",
    description: "Open music database with detailed artist and release information",
    icon: "🎼",
    category: "Music & Media",
    features: ["Artist Database", "Release Info", "Recording Data", "Cover Art"],
    useCases: ["Music Tagging", "Library Organization", "Metadata Accuracy", "Music Apps"],
    price: "Free & Open Source"
  },
  {
    id: "mixcloud",
    name: "Mixcloud API",
    description: "DJ mixes, radio shows and podcast streaming platform",
    icon: "🎙️",
    category: "Music & Media",
    features: ["Mix Streaming", "DJ Shows", "Podcast Access", "User Collections"],
    useCases: ["DJ Platforms", "Podcast Apps", "Radio Integration", "Mix Discovery"],
    price: "Freemium"
  },
  {
    id: "bandcamp",
    name: "Bandcamp API",
    description: "Independent artist music discovery and direct artist support",
    icon: "🎺",
    category: "Music & Media",
    features: ["Independent Music", "Artist Profiles", "Album Sales", "Track Info"],
    useCases: ["Indie Music Apps", "Artist Platforms", "Music Retail", "Discovery"],
    price: "Free"
  },
  {
    id: "audiomatch",
    name: "AudioMatch API",
    description: "Audio fingerprinting and music recognition technology",
    icon: "🔊",
    category: "Music & Media",
    features: ["Music Recognition", "Fingerprinting", "Track Matching", "Metadata Lookup"],
    useCases: ["Shazam-like Apps", "Music Recognition", "Track ID", "Rights Management"],
    price: "Enterprise"
  }
];

export const socialMediaAPIs: APIService[] = [
  {
    id: "instagram",
    name: "Meta Graph API",
    description: "Instagram, Facebook integration for posts, stories, and analytics",
    icon: "📸",
    category: "Social Media",
    features: ["Photo Sharing", "Story Integration", "Analytics", "User Management"],
    useCases: ["Social Dashboards", "Content Management", "Analytics Tools", "Automation"],
    price: "Free"
  },
  {
    id: "twitter",
    name: "Twitter/X API",
    description: "Tweet posting, real-time feed, trends, and engagement tracking",
    icon: "𝕏",
    category: "Social Media",
    features: ["Tweet Posting", "Timeline Access", "Trends", "Engagement Metrics"],
    useCases: ["Social Monitoring", "Marketing Automation", "Analytics", "Community Mgmt"],
    price: "Paid Tiers"
  },
  {
    id: "linkedin",
    name: "LinkedIn API",
    description: "Professional network integration, posts, and job postings",
    icon: "💼",
    category: "Social Media",
    features: ["Profile Access", "Post Sharing", "Job Postings", "Company Info"],
    useCases: ["HR Platforms", "Recruitment Tools", "B2B Marketing", "Networking"],
    price: "Free & Premium"
  },
  {
    id: "discord",
    name: "Discord API",
    description: "Community management, bot creation, and messaging integration",
    icon: "💬",
    category: "Social Media",
    features: ["Bot Creation", "Channel Management", "User Roles", "Webhooks"],
    useCases: ["Community Platforms", "Bot Integration", "Support Systems", "Gaming"],
    price: "Free"
  },
  {
    id: "telegram",
    name: "Telegram Bot API",
    description: "Messaging, bot creation, and automated notifications",
    icon: "✈️",
    category: "Social Media",
    features: ["Bot Creation", "Group Management", "File Sharing", "Notifications"],
    useCases: ["Notification Systems", "Customer Support", "Marketing Automation", "Alerts"],
    price: "Free"
  },
  {
    id: "slack",
    name: "Slack API",
    description: "Team communication, bots, and workflow automation",
    icon: "🚀",
    category: "Social Media",
    features: ["Message Sending", "Bot Integration", "File Management", "Workflows"],
    useCases: ["Team Automation", "Notifications", "Integration Hub", "Productivity Tools"],
    price: "Free & Paid"
  },
  {
    id: "reddit",
    name: "Reddit API",
    description: "Content discovery, subreddit data, and community insights",
    icon: "🔗",
    category: "Social Media",
    features: ["Post Scraping", "Subreddit Data", "User Info", "Comment Analysis"],
    useCases: ["Content Aggregation", "Social Listening", "Analytics", "Trend Analysis"],
    price: "Free"
  },
  {
    id: "tiktok",
    name: "TikTok API",
    description: "Video content, trends, creator analytics, and user data",
    icon: "🎭",
    category: "Social Media",
    features: ["Video Data", "User Analytics", "Trends", "Creator Tools"],
    useCases: ["Content Tools", "Analytics Platforms", "Marketing Automation", "Social Tools"],
    price: "Paid"
  }
];

export const paymentAPIs: APIService[] = [
  {
    id: "stripe",
    name: "Stripe API",
    description: "Global payment processing, subscriptions, and financial operations",
    icon: "💳",
    category: "Payment & Finance",
    features: ["Payment Processing", "Subscriptions", "Invoicing", "Fraud Detection"],
    useCases: ["E-commerce", "SaaS Platforms", "Marketplaces", "Subscription Services"],
    price: "2.9% + $0.30 per transaction"
  },
  {
    id: "paypal",
    name: "PayPal API",
    description: "Online payments, transfers, and wallet integration",
    icon: "🏦",
    category: "Payment & Finance",
    features: ["Payment Processing", "Transfers", "Billing", "Invoicing"],
    useCases: ["Online Shopping", "Freelance Payments", "Fundraising", "Multi-currency"],
    price: "2.2% + fees"
  },
  {
    id: "razorpay",
    name: "Razorpay API",
    description: "Indian payment gateway with UPI, cards, and wallets",
    icon: "🇮🇳",
    category: "Payment & Finance",
    features: ["UPI Payments", "Card Processing", "Wallet Integration", "Subscriptions"],
    useCases: ["Indian E-commerce", "Billing", "Subscriptions", "Donations"],
    price: "2.3% + GST"
  },
  {
    id: "square",
    name: "Square API",
    description: "Payment processing and point-of-sale solutions",
    icon: "⬜",
    category: "Payment & Finance",
    features: ["POS Integration", "Payment Processing", "Inventory", "Reporting"],
    useCases: ["Retail", "Restaurants", "Services", "Mobile Commerce"],
    price: "2.6% + $0.30"
  },
  {
    id: "fastspring",
    name: "FastSpring API",
    description: "E-commerce and software licensing platform",
    icon: "🛒",
    category: "Payment & Finance",
    features: ["Payment Processing", "License Management", "Tax Handling", "Multi-currency"],
    useCases: ["Digital Products", "Software Sales", "Subscriptions", "Global E-commerce"],
    price: "Variable"
  },
  {
    id: "2checkout",
    name: "2Checkout (Verifone) API",
    description: "Multi-currency payment processing and subscription management",
    icon: "💰",
    category: "Payment & Finance",
    features: ["Multi-currency", "Subscriptions", "Risk Management", "Local Payments"],
    useCases: ["Global E-commerce", "SaaS", "Digital Goods", "Subscriptions"],
    price: "3-5% fees"
  },
  {
    id: "adyen",
    name: "Adyen API",
    description: "Enterprise payment platform for global transactions",
    icon: "🌍",
    category: "Payment & Finance",
    features: ["Global Payments", "Risk Management", "Reporting", "Multi-channel"],
    useCases: ["Enterprise", "Marketplaces", "High-volume Retail", "Global Commerce"],
    price: "Custom Enterprise"
  }
];

export const weatherAPIs: APIService[] = [
  {
    id: "openweather",
    name: "OpenWeather API",
    description: "Real-time weather data, forecasts, and weather alerts",
    icon: "🌤️",
    category: "Weather & Location",
    features: ["Current Weather", "Forecasts", "Historical Data", "Alerts"],
    useCases: ["Weather Apps", "Travel Planning", "Agriculture", "Event Planning"],
    price: "Free to Paid"
  },
  {
    id: "weatherapi",
    name: "WeatherAPI",
    description: "Comprehensive weather data with sports and astronomy info",
    icon: "⛅",
    category: "Weather & Location",
    features: ["Weather Data", "Astronomy", "Sports Info", "Alerts"],
    useCases: ["Mobile Apps", "Websites", "IoT Devices", "Dashboards"],
    price: "Free + Paid"
  }
];

export const aiMLAPIs: APIService[] = [
  {
    id: "openai",
    name: "OpenAI API",
    description: "GPT models for text generation, ChatGPT, and advanced AI tasks",
    icon: "🤖",
    category: "AI & Machine Learning",
    features: ["GPT Models", "Chat Completion", "Text Generation", "Code Analysis"],
    useCases: ["ChatBots", "Content Generation", "Code Assistance", "NLP Applications"],
    price: "Pay per token"
  },
  {
    id: "anthropic",
    name: "Claude API",
    description: "Advanced language model with strong reasoning capabilities",
    icon: "🧠",
    category: "AI & Machine Learning",
    features: ["Text Analysis", "Code Generation", "Document Processing", "Reasoning"],
    useCases: ["Content Creation", "Code Review", "Analysis Tools", "Chatbots"],
    price: "Pay per token"
  },
  {
    id: "google",
    name: "Google AI API",
    description: "Gemini, NLP, vision, and ML models from Google",
    icon: "🔍",
    category: "AI & Machine Learning",
    features: ["Text Generation", "Image Analysis", "NLP", "Vision API"],
    useCases: ["Image Recognition", "OCR", "NLP Tasks", "Recommendations"],
    price: "Free + Paid"
  }
];

export const videoAPIs: APIService[] = [
  {
    id: "vimeo",
    name: "Vimeo API",
    description: "Professional video hosting, streaming, and analytics",
    icon: "🎥",
    category: "Video & Streaming",
    features: ["Video Upload", "Streaming", "Analytics", "Player Customization"],
    useCases: ["Video Platforms", "Learning Management", "Marketing Videos", "Portfolios"],
    price: "Free + Paid"
  },
  {
    id: "mux",
    name: "Mux API",
    description: "Video streaming infrastructure and analytics platform",
    icon: "📹",
    category: "Video & Streaming",
    features: ["Live Streaming", "Video On Demand", "Analytics", "DRM Support"],
    useCases: ["Streaming Platforms", "Video Apps", "Live Events", "Content Delivery"],
    price: "Pay as you go"
  }
];

export const locationAPIs: APIService[] = [
  {
    id: "mapbox",
    name: "Mapbox API",
    description: "Maps, navigation, and location intelligence platform",
    icon: "🗺️",
    category: "Maps & Location",
    features: ["Interactive Maps", "Navigation", "Geocoding", "Analytics"],
    useCases: ["Delivery Apps", "Travel Planning", "Real Estate", "Location Analytics"],
    price: "Free + Paid"
  },
  {
    id: "googlemap",
    name: "Google Maps API",
    description: "Mapping, directions, places, and location services",
    icon: "📍",
    category: "Maps & Location",
    features: ["Maps Embedding", "Directions", "Places Search", "Geocoding"],
    useCases: ["Delivery Platforms", "Travel Apps", "Location Services", "Mapping"],
    price: "Pay per request"
  }
];

// Export all categories
export const allAPICategories = [
  { name: "Music & Media", icon: "🎵", apis: musicAndMediaAPIs },
  { name: "Social Media", icon: "📱", apis: socialMediaAPIs },
  { name: "Payment & Finance", icon: "💳", apis: paymentAPIs },
  { name: "AI & Machine Learning", icon: "🤖", apis: aiMLAPIs },
  { name: "Video & Streaming", icon: "🎬", apis: videoAPIs },
  { name: "Weather & Location", icon: "🌍", apis: weatherAPIs },
  { name: "Maps & Location", icon: "🗺️", apis: locationAPIs }
];

// Top 7 most commonly requested APIs
export const topCommonAPIs = [
  musicAndMediaAPIs[0], // Spotify
  socialMediaAPIs[0],   // Meta Graph (Instagram)
  paymentAPIs[0],       // Stripe
  aiMLAPIs[0],          // OpenAI
  locationAPIs[1],      // Google Maps
  videoAPIs[0],         // Vimeo
  weatherAPIs[0]        // OpenWeather
];
