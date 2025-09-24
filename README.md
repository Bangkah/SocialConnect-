# SocialConnect - Social Media App

Aplikasi social media modern yang dibangun dengan **Expo React Native** dan **TypeScript**. Aplikasi ini menyediakan pengalaman social media yang lengkap dengan fitur-fitur modern dan UI/UX yang menarik.

## 🚀 Fitur Utama

### 🔐 Autentikasi
- **Login & Register** - Sistem autentikasi yang aman
- **Persistent Login** - User tetap login setelah restart app
- **Form Validation** - Validasi input yang comprehensive

### 📱 Core Features
- **Home Feed** - Timeline dengan posts dari semua user
- **Create Post** - Buat post dengan text dan gambar
- **Like & Comment** - Interaksi dengan posts
- **Search Users** - Cari dan temukan user lain
- **Activity Feed** - Notifikasi like, comment, dan follow
- **User Profile** - Profile lengkap dengan stats dan posts grid

### 🎨 UI/UX Modern
- **Clean Design** - Interface yang bersih dan modern
- **Smooth Animations** - Animasi yang halus dan responsif
- **Consistent Typography** - Sistem font yang konsisten
- **Color System** - Palet warna yang harmonis
- **Responsive Layout** - Tampilan optimal di semua ukuran layar

### 📸 Media Features
- **Image Upload** - Upload foto dari gallery atau camera
- **Image Preview** - Preview gambar sebelum posting
- **Optimized Images** - Kompresi dan optimasi gambar otomatis

## 🛠️ Tech Stack

### Core Technologies
- **Expo SDK 53** - Framework React Native
- **TypeScript** - Type safety dan better development experience
- **React Navigation** - Navigation dengan tabs dan stack
- **Expo Router** - File-based routing system

### UI & Styling
- **React Native StyleSheet** - Native styling approach
- **Lucide React Native** - Icon library yang modern
- **Expo Google Fonts** - Typography dengan Inter font family
- **SafeAreaView** - Handle safe area di semua device

### State Management & Storage
- **React Context** - Global state management
- **AsyncStorage** - Local data persistence
- **React Hooks** - Modern state management patterns

### Media & Permissions
- **Expo Image Picker** - Camera dan gallery access
- **Expo Camera** - Camera functionality
- **Expo Permissions** - Permission handling

### Development Tools
- **ESLint & Prettier** - Code formatting dan linting
- **TypeScript** - Static type checking
- **Expo Dev Tools** - Development dan debugging

## 📁 Struktur Project

```
├── app/                          # App routes (Expo Router)
│   ├── (auth)/                   # Authentication screens
│   │   ├── login.tsx            # Login screen
│   │   ├── register.tsx         # Register screen
│   │   └── _layout.tsx          # Auth layout
│   ├── (tabs)/                   # Main app tabs
│   │   ├── index.tsx            # Home feed
│   │   ├── search.tsx           # Search users
│   │   ├── create.tsx           # Create post
│   │   ├── activity.tsx         # Activity feed
│   │   ├── profile.tsx          # User profile
│   │   └── _layout.tsx          # Tabs layout
│   ├── _layout.tsx              # Root layout
│   └── +not-found.tsx           # 404 screen
├── components/                   # Reusable components
│   ├── PostCard.tsx             # Post display component
│   ├── CreatePostModal.tsx      # Create post modal
│   └── LoadingSpinner.tsx       # Loading indicator
├── contexts/                     # React contexts
│   └── AuthContext.tsx          # Authentication context
├── types/                        # TypeScript type definitions
│   └── index.ts                 # Main types
├── utils/                        # Utility functions
│   ├── mockData.ts              # Mock data generators
│   └── dateUtils.ts             # Date formatting utilities
└── hooks/                        # Custom hooks
    └── useFrameworkReady.ts     # Framework initialization
```

## 🎯 Komponen Utama

### 1. Authentication System
```typescript
// Login dengan email & password
const { login, register, logout, user } = useAuth();

// Auto-login dari stored credentials
useEffect(() => {
  loadStoredUser();
}, []);
```

### 2. Post Management
```typescript
// Create post dengan gambar
const handleCreatePost = async (content: string, image?: string) => {
  const newPost = {
    id: uuidv4(),
    content,
    image,
    user: currentUser,
    createdAt: new Date().toISOString(),
  };
};
```

### 3. Real-time Interactions
```typescript
// Like/unlike posts
const handleLike = (postId: string) => {
  setPosts(prevPosts =>
    prevPosts.map(post =>
      post.id === postId
        ? { ...post, isLiked: !post.isLiked, likes: post.likes + 1 }
        : post
    )
  );
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn
- Expo CLI
- iOS Simulator atau Android Emulator (opsional)

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd social-media-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open app**
   - Scan QR code dengan Expo Go app
   - Atau tekan `i` untuk iOS simulator
   - Atau tekan `a` untuk Android emulator

## 📱 Cara Menggunakan

### 1. Authentication
- **Register**: Buat akun baru dengan username, email, dan password
- **Login**: Masuk dengan email dan password yang sudah terdaftar
- **Auto-login**: App akan mengingat login status

### 2. Home Feed
- Scroll untuk melihat posts dari semua user
- Tap ❤️ untuk like/unlike post
- Tap 💬 untuk melihat comments
- Pull to refresh untuk update feed

### 3. Create Post
- Tap tab "Create" di bottom navigation
- Tulis caption untuk post
- Tap "Photo" untuk menambah gambar dari gallery/camera
- Tap "Post" untuk publish

### 4. Search & Discovery
- Tap tab "Search"
- Ketik username untuk mencari user
- Tap "Follow" untuk follow user
- Lihat recent searches

### 5. Activity Feed
- Tap tab "Activity" untuk melihat notifikasi
- Lihat siapa yang like, comment, atau follow
- Timestamp menunjukkan kapan activity terjadi

### 6. Profile Management
- Tap tab "Profile" untuk melihat profile sendiri
- Lihat stats: posts, followers, following
- Grid view untuk semua posts
- Tap menu untuk logout

## 🎨 Design System

### Colors
```typescript
const colors = {
  primary: '#007AFF',      // Blue - primary actions
  secondary: '#FF3040',    // Red - likes, hearts
  success: '#34C759',      // Green - success states
  warning: '#FF9500',      // Orange - warnings
  text: '#000000',         // Black - primary text
  textSecondary: '#666666', // Gray - secondary text
  textTertiary: '#999999',  // Light gray - tertiary text
  background: '#FFFFFF',    // White - backgrounds
  backgroundSecondary: '#F8F9FA', // Light gray - secondary bg
  border: '#EEEEEE',       // Light gray - borders
};
```

### Typography
```typescript
const typography = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
};
```

### Spacing System
```typescript
const spacing = {
  xs: 4,    // 4px
  sm: 8,    // 8px
  md: 12,   // 12px
  lg: 16,   // 16px
  xl: 20,   // 20px
  xxl: 24,  // 24px
};
```

## 🔧 Kustomisasi

### 1. Mengubah Theme Colors
Edit file `components/` dan ubah color values:
```typescript
const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#YOUR_COLOR', // Ubah warna primary
  },
});
```

### 2. Menambah Font Baru
Install font dari Expo Google Fonts:
```bash
npm install @expo-google-fonts/roboto
```

Update `app/_layout.tsx`:
```typescript
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const [fontsLoaded] = useFonts({
  Roboto_400Regular,
});
```

### 3. Menambah Fitur Baru
1. Buat component baru di `components/`
2. Tambah types di `types/index.ts`
3. Update context jika perlu state global
4. Tambah screen baru di `app/(tabs)/`

## 🧪 Testing

### Manual Testing Checklist
- [ ] Register dengan data valid
- [ ] Login dengan credentials yang benar
- [ ] Create post dengan dan tanpa gambar
- [ ] Like/unlike posts
- [ ] Search users
- [ ] View profile dan stats
- [ ] Logout dan login kembali
- [ ] Test di berbagai ukuran layar

### Performance Testing
- [ ] Smooth scrolling di feed
- [ ] Fast image loading
- [ ] Responsive UI interactions
- [ ] Memory usage optimization

## 🚀 Deployment

### Build untuk Production

1. **Build APK (Android)**
```bash
expo build:android
```

2. **Build IPA (iOS)**
```bash
expo build:ios
```

3. **Web Build**
```bash
expo build:web
```

### App Store Deployment
1. Configure `app.json` dengan app details
2. Generate app icons dan splash screens
3. Build production version
4. Upload ke App Store Connect / Google Play Console

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Team

- **Frontend Developer** - UI/UX Implementation
- **Backend Developer** - API Integration
- **Designer** - UI/UX Design
- **QA Tester** - Quality Assurance

## 📞 Support

Jika ada pertanyaan atau issue:
- Create GitHub issue
- Email: support@socialconnect.app
- Documentation: [docs.socialconnect.app](https://docs.socialconnect.app)

---

**SocialConnect** - Connecting people through beautiful social experiences 🚀