# عقار الأردن - Arabic Real Estate Marketplace

A comprehensive Arabic-language real estate marketplace application for the Libyan market, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

### 🏠 Property Discovery Dashboard
- **Map-based search** with interactive property locations
- **Advanced filtering system** by type, status, location, and price range
- **40 Libyan cities** coverage with localized content
- **Featured property highlights** with premium listings
- **Multiple view modes**: Grid, List, and Map views

### 🏡 Property Detail & Communication Center
- **Full media galleries** with image carousels and zoom functionality
- **Integrated communication tools**: Direct calls, messaging, and appointment scheduling
- **Comprehensive property information**: Features, nearby places, and specifications
- **Agent contact integration** with ratings and experience details
- **Mortgage calculator** and financing tools

### 👤 User Profile & Listing Management
- **User verification system** with badges and trust indicators
- **Property listing management** with analytics and performance tracking
- **Multi-status listings**: Active, Paused, Sold, Expired
- **Advanced property posting form** with drag-and-drop image upload
- **User statistics and achievements** system

### 🌍 Arabic RTL Optimization
- **Full RTL (Right-to-Left) layout support** for Arabic content
- **Arabic typography** with Noto Sans Arabic font integration
- **Localized content** in Libyan Arabic dialect
- **Cultural adaptation** for local real estate practices

### 📱 Mobile-First Design
- **Responsive design** optimized for mobile devices
- **Touch-friendly interactions** with swipe gestures
- **Progressive Web App** capabilities
- **Fast loading times** with optimized images and code splitting

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Arabic theme
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Query (TanStack Query)
- **Development**: ESLint, Hot reload

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd arabic-real-estate-marketplace
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:4006`

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📄 Application Structure

### 🏠 Home Page (`/`)
- Hero section with mobile mockups based on design reference
- Property search functionality with Arabic interface
- Featured properties grid with RTL layout
- City-based filtering for 40 Libyan cities

### 🏡 Property Detail (`/properties/[id]`)
- Full property information with comprehensive details
- Image gallery with navigation and zoom functionality
- Agent contact details with verification badges
- Communication tools (call, message, schedule appointments)
- Related properties suggestions
- Mortgage calculator integration

### 👤 User Profile (`/profile`)
- Personal information management with Arabic forms
- Property listings dashboard with analytics
- Add new property form with drag-and-drop uploads
- Performance analytics and user statistics

## 🎨 Design Implementation

Based on the provided design reference (`ai-generated-preview.png`), the application features:

- **Blue gradient background** (`linear-gradient(135deg, hsl(220 80% 60%), hsl(200 90% 50%))`)
- **Mobile mockups** in hero section showing app interface
- **Property card grid** with consistent spacing and hover effects
- **Arabic navigation** with RTL-optimized layout
- **Search functionality** prominently placed in hero section
- **Responsive design** matching the reference aesthetics

## 🌍 Arabic & RTL Features

### Language Support
- Complete Arabic interface with Noto Sans Arabic font
- Libyan dialect preferences for local relevance
- Currency display in Libyan Dinar (LYD)
- Date formatting in Arabic locale

### RTL Layout
- HTML `dir="rtl"` attribute for proper text direction
- CSS RTL utilities for spacing and alignment
- Icon orientation adapted for RTL
- Navigation and form field alignment optimized

## 📊 Key Components

### Property Cards
```typescript
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'apartment' | 'villa' | 'house' | 'land' | 'commercial';
  status: 'for-sale' | 'for-rent' | 'for-exchange';
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  images: string[];
  featured: boolean;
}
```

### Search & Filtering
- Real-time search functionality
- Advanced filters by type, status, city, and price range
- Quick filter buttons for common searches
- Results pagination and sorting

### Communication System
- Direct phone calling integration
- In-app messaging system
- Appointment scheduling with calendar integration
- Agent contact forms with verification

## 🚀 Deployment

The application is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** with appropriate build settings
- **Traditional hosting** with Node.js support

### Build Command
```bash
npm run build
```

### Environment Variables
Set up the following for production:
- Database connections
- Authentication secrets
- File upload services
- Maps API keys

## 📱 Mobile Optimization

- **Touch-friendly interface** with appropriate button sizes
- **Swipe gestures** for image galleries and property browsing
- **Responsive grid layouts** adapting from desktop to mobile
- **Progressive loading** for better mobile performance
- **Offline capability** with service worker implementation

## 🎯 Real Estate Features

### Transaction Types
- **للبيع (For Sale)**: Traditional property sales
- **للإيجار (For Rent)**: Rental properties with monthly pricing
- **للمقايضة (For Exchange)**: Property exchange/barter system

### Property Categories
- **شقق (Apartments)**: Urban residential units
- **فلل (Villas)**: Luxury residential properties
- **بيوت (Houses)**: Traditional houses
- **أراضي (Land)**: Vacant land for development
- **تجاري (Commercial)**: Business properties

### Location Coverage
40+ Libyan cities including:
- طرابلس (Tripoli)
- بنغازي (Benghazi)
- مصراتة (Misrata)
- الزاوية (Zawiya)
- And many more regional cities

## 🔧 Development Notes

### SSR Considerations
The application uses `export const dynamic = 'force-dynamic'` for pages requiring browser APIs like geolocation for property mapping.

### Performance Features
- Image optimization with Next.js Image component
- Code splitting for faster loading
- Caching strategies for property data
- Lazy loading for property lists

---

**عقار الأردن** - منصتك الموثوقة للعقارات الليبية 🏠🇱🇾
