// ===================================================================
// Seed Script - Add 5 Professional Courses
// Run: npx ts-node src/scripts/seedCourses.ts
// ===================================================================

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Course Schema (simplified for seeding)
const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    icon: String,
    status: { type: String, default: 'active' },
    type: { type: String, default: 'course' },
    productCount: { type: Number, default: 0 },
    order: { type: Number, default: 0 },
    isParent: { type: Boolean, default: true }
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    titleBn: String,
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    descriptionBn: String,
    shortDescription: String,
    shortDescriptionBn: String,
    thumbnail: { type: String, required: true },
    previewVideo: String,
    bannerImage: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    tags: [String],
    price: { type: Number, required: true },
    discountPrice: Number,
    currency: { type: String, enum: ['BDT', 'USD'], default: 'USD' },
    isFree: { type: Boolean, default: false },
    courseType: { type: String, enum: ['online', 'offline', 'recorded'], default: 'recorded' },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    language: { type: String, enum: ['bangla', 'english', 'both'], default: 'english' },
    totalDuration: { type: Number, default: 0 },
    totalLessons: { type: Number, default: 0 },
    totalModules: { type: Number, default: 0 },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    features: [String],
    requirements: [String],
    whatYouWillLearn: [String],
    targetAudience: [String],
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    totalEnrollments: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    metaTitle: String,
    metaDescription: String,
    publishedAt: Date,
    instructorName: String,
}, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

// Categories to create
const categories = [
    {
        name: 'Web Development',
        slug: 'web-development',
        description: 'Learn modern web development technologies',
        icon: 'LuCode',
        type: 'course',
        status: 'active'
    },
    {
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Master digital marketing strategies',
        icon: 'LuMegaphone',
        type: 'course',
        status: 'active'
    },
    {
        name: 'Data Science',
        slug: 'data-science',
        description: 'Learn data analysis and machine learning',
        icon: 'LuDatabase',
        type: 'course',
        status: 'active'
    },
    {
        name: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Create beautiful and functional designs',
        icon: 'LuPalette',
        type: 'course',
        status: 'active'
    },
    {
        name: 'Business & Finance',
        slug: 'business-finance',
        description: 'Business strategies and financial management',
        icon: 'LuBriefcase',
        type: 'course',
        status: 'active'
    }
];

// Courses to create
const getCourses = (categoryIds: any) => [
    {
        title: 'Complete Web Development Bootcamp 2024',
        titleBn: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট বুটক্যাম্প ২০২৪',
        slug: 'complete-web-development-bootcamp-2024',
        description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 20+ real-world projects and become a professional full-stack developer.',
        descriptionBn: 'HTML, CSS, JavaScript, React, Node.js, এবং MongoDB শিখুন। ২০+ বাস্তব প্রজেক্ট তৈরি করুন এবং একজন পেশাদার ফুল-স্ট্যাক ডেভেলপার হয়ে উঠুন।',
        shortDescription: 'Become a full-stack web developer with hands-on projects',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        previewVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        category: categoryIds['web-development'],
        tags: ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'fullstack'],
        price: 99.99,
        discountPrice: 19.99,
        currency: 'USD',
        isFree: false,
        courseType: 'recorded',
        level: 'beginner',
        language: 'english',
        totalDuration: 4800, // 80 hours in minutes
        totalLessons: 250,
        totalModules: 25,
        features: [
            '80+ hours of video content',
            '250+ lessons',
            '20+ real-world projects',
            'Certificate of completion',
            'Lifetime access',
            '24/7 support'
        ],
        requirements: [
            'No programming experience required',
            'A computer with internet access',
            'Desire to learn'
        ],
        whatYouWillLearn: [
            'Build professional websites from scratch',
            'Master HTML5, CSS3, and JavaScript ES6+',
            'Create React applications',
            'Build REST APIs with Node.js',
            'Work with MongoDB databases',
            'Deploy applications to cloud'
        ],
        targetAudience: [
            'Complete beginners who want to learn coding',
            'Students looking for a career in tech',
            'Anyone who wants to build websites'
        ],
        status: 'published',
        isFeatured: true,
        isPopular: true,
        totalEnrollments: 15420,
        averageRating: 4.8,
        totalReviews: 2340,
        totalViews: 45000,
        instructorName: 'John Smith',
        publishedAt: new Date()
    },
    {
        title: 'Digital Marketing Masterclass',
        titleBn: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
        slug: 'digital-marketing-masterclass',
        description: 'Learn SEO, Social Media Marketing, Google Ads, Facebook Ads, Email Marketing, and Content Marketing. Grow any business online.',
        descriptionBn: 'SEO, সোশ্যাল মিডিয়া মার্কেটিং, গুগল অ্যাডস, ফেসবুক অ্যাডস, ইমেইল মার্কেটিং, এবং কন্টেন্ট মার্কেটিং শিখুন।',
        shortDescription: 'Master all aspects of digital marketing',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        category: categoryIds['digital-marketing'],
        tags: ['seo', 'social-media', 'google-ads', 'facebook-ads', 'marketing', 'business'],
        price: 79.99,
        discountPrice: 29.99,
        currency: 'USD',
        isFree: false,
        courseType: 'recorded',
        level: 'intermediate',
        language: 'english',
        totalDuration: 2400, // 40 hours
        totalLessons: 150,
        totalModules: 15,
        features: [
            '40+ hours of content',
            'Real campaign examples',
            'Marketing templates included',
            'Certificate of completion',
            'Lifetime access'
        ],
        requirements: [
            'Basic computer skills',
            'Interest in marketing'
        ],
        whatYouWillLearn: [
            'Rank websites on Google with SEO',
            'Create viral social media campaigns',
            'Run profitable Google & Facebook Ads',
            'Build email marketing funnels',
            'Analyze marketing data'
        ],
        targetAudience: [
            'Business owners',
            'Marketing professionals',
            'Freelancers',
            'Anyone wanting to learn digital marketing'
        ],
        status: 'published',
        isFeatured: true,
        isPopular: false,
        totalEnrollments: 8750,
        averageRating: 4.7,
        totalReviews: 1250,
        totalViews: 28000,
        instructorName: 'Sarah Johnson',
        publishedAt: new Date()
    },
    {
        title: 'Python for Data Science & Machine Learning',
        titleBn: 'পাইথন ডাটা সায়েন্স এবং মেশিন লার্নিং',
        slug: 'python-data-science-machine-learning',
        description: 'Learn Python, Pandas, NumPy, Matplotlib, Scikit-Learn, and TensorFlow. Build machine learning models and analyze data like a pro.',
        descriptionBn: 'পাইথন, পান্ডাস, নাম্পাই, ম্যাটপ্লটলিব, সাইকিট-লার্ন, এবং টেনসরফ্লো শিখুন। মেশিন লার্নিং মডেল তৈরি করুন।',
        shortDescription: 'Master data science with Python',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        category: categoryIds['data-science'],
        tags: ['python', 'data-science', 'machine-learning', 'ai', 'pandas', 'tensorflow'],
        price: 89.99,
        discountPrice: 24.99,
        currency: 'USD',
        isFree: false,
        courseType: 'recorded',
        level: 'intermediate',
        language: 'english',
        totalDuration: 3600, // 60 hours
        totalLessons: 200,
        totalModules: 20,
        features: [
            '60+ hours of video',
            '15+ real-world projects',
            'Jupyter notebooks included',
            'Certificate of completion',
            'Job-ready portfolio'
        ],
        requirements: [
            'Basic programming knowledge helpful',
            'High school mathematics'
        ],
        whatYouWillLearn: [
            'Python programming fundamentals',
            'Data manipulation with Pandas',
            'Data visualization with Matplotlib',
            'Machine learning with Scikit-Learn',
            'Deep learning with TensorFlow'
        ],
        targetAudience: [
            'Aspiring data scientists',
            'Software developers',
            'Analysts looking to learn ML',
            'Students interested in AI'
        ],
        status: 'published',
        isFeatured: false,
        isPopular: true,
        totalEnrollments: 12300,
        averageRating: 4.9,
        totalReviews: 1890,
        totalViews: 38000,
        instructorName: 'Dr. Michael Chen',
        publishedAt: new Date()
    },
    {
        title: 'UI/UX Design Fundamentals',
        titleBn: 'UI/UX ডিজাইন ফান্ডামেন্টালস',
        slug: 'ui-ux-design-fundamentals',
        description: 'Learn Figma, design principles, user research, wireframing, prototyping, and build a complete design portfolio.',
        descriptionBn: 'ফিগমা, ডিজাইন প্রিন্সিপল, ইউজার রিসার্চ, ওয়্যারফ্রেমিং, প্রোটোটাইপিং শিখুন এবং একটি সম্পূর্ণ ডিজাইন পোর্টফোলিও তৈরি করুন।',
        shortDescription: 'Create beautiful and user-friendly designs',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        category: categoryIds['ui-ux-design'],
        tags: ['figma', 'ui-design', 'ux-design', 'prototyping', 'wireframing', 'design'],
        price: 69.99,
        discountPrice: 0,
        currency: 'USD',
        isFree: true,
        courseType: 'recorded',
        level: 'beginner',
        language: 'english',
        totalDuration: 1800, // 30 hours
        totalLessons: 100,
        totalModules: 12,
        features: [
            '30+ hours of content',
            'Figma design files included',
            '5 portfolio projects',
            'Certificate of completion',
            'Design resources pack'
        ],
        requirements: [
            'No design experience needed',
            'Creativity and passion for design'
        ],
        whatYouWillLearn: [
            'Master Figma for UI design',
            'Understand UX research methods',
            'Create wireframes and mockups',
            'Build interactive prototypes',
            'Design mobile and web apps'
        ],
        targetAudience: [
            'Aspiring UI/UX designers',
            'Web developers wanting to learn design',
            'Graphic designers transitioning to digital',
            'Product managers'
        ],
        status: 'published',
        isFeatured: false,
        isPopular: false,
        totalEnrollments: 6540,
        averageRating: 4.6,
        totalReviews: 980,
        totalViews: 22000,
        instructorName: 'Emily Davis',
        publishedAt: new Date()
    },
    {
        title: 'Business Strategy & Entrepreneurship',
        titleBn: 'বিজনেস স্ট্র্যাটেজি এবং এন্ট্রাপ্রেনারশিপ',
        slug: 'business-strategy-entrepreneurship',
        description: 'Learn how to start, grow, and scale a successful business. Covers business models, funding, marketing, and operations.',
        descriptionBn: 'কীভাবে একটি সফল ব্যবসা শুরু, বৃদ্ধি এবং স্কেল করতে হয় শিখুন। বিজনেস মডেল, ফান্ডিং, মার্কেটিং, এবং অপারেশন কভার করে।',
        shortDescription: 'Start and grow your own business',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        category: categoryIds['business-finance'],
        tags: ['business', 'entrepreneurship', 'startup', 'strategy', 'finance', 'management'],
        price: 59.99,
        discountPrice: 39.99,
        currency: 'USD',
        isFree: false,
        courseType: 'recorded',
        level: 'advanced',
        language: 'english',
        totalDuration: 2100, // 35 hours
        totalLessons: 120,
        totalModules: 14,
        features: [
            '35+ hours of expert content',
            'Business plan templates',
            'Case studies from real startups',
            'Certificate of completion',
            'Mentor Q&A sessions'
        ],
        requirements: [
            'Basic business understanding',
            'Entrepreneurial mindset'
        ],
        whatYouWillLearn: [
            'Develop a winning business strategy',
            'Create a solid business plan',
            'Understand funding and investment',
            'Build and manage teams',
            'Scale operations efficiently'
        ],
        targetAudience: [
            'Aspiring entrepreneurs',
            'Small business owners',
            'Startup founders',
            'Business students'
        ],
        status: 'published',
        isFeatured: true,
        isPopular: false,
        totalEnrollments: 4320,
        averageRating: 4.5,
        totalReviews: 650,
        totalViews: 15000,
        instructorName: 'Robert Williams',
        publishedAt: new Date()
    }
];

async function seedDatabase() {
    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            console.error('❌ DATABASE_URL not found in .env');
            process.exit(1);
        }

        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(dbUrl);
        console.log('✅ Connected to MongoDB');

        // Create categories first
        console.log('\n📁 Creating categories...');
        const categoryIds: { [key: string]: mongoose.Types.ObjectId } = {};

        for (const cat of categories) {
            const existing = await Category.findOne({ slug: cat.slug });
            if (existing) {
                categoryIds[cat.slug] = existing._id;
                console.log(`   ⏭️  Category "${cat.name}" already exists`);
            } else {
                const created = await Category.create(cat);
                categoryIds[cat.slug] = created._id;
                console.log(`   ✅ Created category: ${cat.name}`);
            }
        }

        // Create courses
        console.log('\n📚 Creating courses...');
        const coursesData = getCourses(categoryIds);

        for (const course of coursesData) {
            const existing = await Course.findOne({ slug: course.slug });
            if (existing) {
                console.log(`   ⏭️  Course "${course.title}" already exists`);
            } else {
                await Course.create(course);
                console.log(`   ✅ Created course: ${course.title}`);
            }
        }

        console.log('\n🎉 Database seeding completed successfully!');
        console.log(`   📁 ${categories.length} categories`);
        console.log(`   📚 ${coursesData.length} courses`);

        await mongoose.disconnect();
        console.log('\n🔌 Disconnected from MongoDB');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
