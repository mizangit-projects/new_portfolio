-- SQL Script for Portfolio Database Schema (Supabase)

-- 1. Hero Table
CREATE TABLE IF NOT EXISTS public.hero (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    cta_text_1 TEXT DEFAULT 'View Projects',
    cta_link_1 TEXT DEFAULT '#projects',
    cta_text_2 TEXT DEFAULT 'Contact Me',
    cta_link_2 TEXT DEFAULT '#contact',
    image_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. About Table
CREATE TABLE IF NOT EXISTS public.about (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    bio TEXT NOT NULL,
    years_experience INT,
    location TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- e.g., 'Technical', 'Visualization', 'Soft Skills'
    icon_name TEXT, -- Lucide icon name or image URL
    proficiency INT CHECK (proficiency >= 0 AND proficiency <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    tags TEXT[], -- array of strings (e.g., ['Python', 'SQL'])
    github_url TEXT,
    live_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Contact Form Submissions (Optional)
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public read access (Modify these based on your needs)
CREATE POLICY "Allow public read for hero" ON public.hero FOR SELECT USING (true);
CREATE POLICY "Allow public read for about" ON public.about FOR SELECT USING (true);
CREATE POLICY "Allow public read for skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Allow public read for projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow anonymous submissions for contact_submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- ==========================================
-- DUMMY DATA FOR INITIAL SETUP
-- ==========================================

-- 1. Insert Dummy Hero Data
INSERT INTO public.hero (name, title, subtitle, image_url)
VALUES (
    'Alex Rivers',
    'Senior Data Analyst',
    'Helping businesses make smarter decisions through data storytelling and advanced statistical modeling.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
) ON CONFLICT DO NOTHING;

-- 2. Insert Dummy About Data
INSERT INTO public.about (bio, years_experience, location)
VALUES (
    'I am a data enthusiast with over 6 years of experience in the fintech and e-commerce sectors. I specialize in turning massive datasets into clear, actionable strategies that drive revenue and efficiency.',
    6,
    'Seattle, WA'
) ON CONFLICT DO NOTHING;

-- 3. Insert Dummy Skills
INSERT INTO public.skills (name, category, proficiency) VALUES
('Python', 'Technical', 95),
('SQL', 'Technical', 90),
('R', 'Technical', 75),
('Tableau', 'Visualization', 85),
('Power BI', 'Visualization', 80),
('D3.js', 'Visualization', 65),
('Pandas', 'Technical', 95),
('Stakeholder Management', 'Soft Skills', 85),
('Data Storytelling', 'Soft Skills', 90)
ON CONFLICT DO NOTHING;

-- 4. Insert Dummy Projects
INSERT INTO public.projects (title, description, tags, github_url, live_url) VALUES
(
    'E-commerce Sales Optimization',
    'Analyzed over 2M transactions to identify seasonal trends and customer churn patterns, resulting in a 12% increase in retention.',
    ARRAY['Python', 'SQL', 'Pandas'],
    'https://github.com',
    'https://example.com'
),
(
    'Financial Risk Dashboard',
    'Built a real-time Tableau dashboard for monitoring credit risk indicators across multiple portfolios.',
    ARRAY['Tableau', 'SQL'],
    'https://github.com',
    'https://example.com'
),
(
    'Customer Segmentation Engine',
    'Developed a K-means clustering model to segment customers based on RFM analysis for targeted marketing campaigns.',
    ARRAY['Python', 'Scikit-learn', 'Matplotlib'],
    'https://github.com',
    'https://example.com'
)
ON CONFLICT DO NOTHING;
