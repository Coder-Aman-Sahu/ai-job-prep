# Landr 🚀 | AI-Powered Job Preparation Platform

![License](https://img.shields.io/github/license/coder-aman-sahu/ai-job-prep)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38b2ac)

**Landr** is a cutting-edge platform designed to accelerate the job search process using Generative AI. It helps candidates overcome interview anxiety and optimize their application materials by providing realistic simulations and instant, data-driven feedback.

## ✨ Key Features

### 🎙️ AI Voice Mock Interviews
Simulate real-time interviews using **Hume AI's Empathic Voice Interface**.
- **Adaptive Conversation:** The AI adapts its questions based on your responses and the specific job description.
- **Sentiment Analysis:** Analyzes voice tone and emotional cues during the call.
- **Detailed Feedback:** Generates post-interview reports on communication clarity, confidence, and role fit.

### 📄 Smart Resume Analysis
Upload your resume (PDF/Word) and get granular feedback powered by **Google Gemini**.
- **ATS Compatibility Scoring:** Checks formatting and structure against Applicant Tracking System standards.
- **Job Matching:** Compares resume keywords against specific job descriptions.
- **Actionable Improvements:** Suggests specific rewrites for bullet points to increase impact.

### 🧠 Technical Question Bank
Practice technical questions tailored to your experience level (Junior, Mid, Senior).
- **Dynamic Generation:** Questions are generated on the fly based on the tech stack in the job description.
- **Code Evaluation:** Submit code snippets or written answers and receive immediate grading and correction.

## 🏗️ System Architecture
<img width="1456" height="1661" alt="AI-JOB-PREP-System-Architecture" src="https://github.com/user-attachments/assets/57479dea-eb41-444f-929d-91a8aefe18ba" />


## 🛠️ Tech Stack

**Frontend & Framework**
- **Next.js 15 (App Router):** Utilizing Server Actions and React Server Components for optimal performance.
- **React 19:** Leveraging the latest hook patterns and Suspense.
- **Tailwind CSS v4:** For modern, responsive styling.
- **Shadcn/UI:** Accessible and customizable UI components built on Radix Primitives.

**Backend & Database**
- **PostgreSQL:** Primary relational database.
- **Drizzle ORM:** Type-safe SQL schema definition and query building.
- **Clerk:** Secure authentication and user management.
- **Arcjet:** Rate limiting and bot protection middleware.

**Artificial Intelligence**
- **Google Gemini 2.5 Flash:** Powering text generation, resume parsing, and feedback logic.
- **Hume AI:** Powering the conversational voice interface and emotion detection.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm, yarn, or pnpm
- A PostgreSQL database instance (local or hosted)

### Installation

```markdown
# AI Job Prep

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/coder-aman-sahu/ai-job-prep.git
cd ai-job-prep
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```bash
# Database
DB_PASSWORD=your_db_password
DB_USER=your_db_user
DB_NAME=your_db_name
DB_HOST=localhost
DB_PORT=5432
DATABASE_URL=postgres://user:password@host:port/db_name

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/onboarding

# AI Services
GEMINI_API_KEY=your_gemini_key
HUME_API_KEY=your_hume_key
HUME_SECRET_KEY=your_hume_secret
NEXT_PUBLIC_HUME_CONFIG_ID=your_hume_config_id

# Security
ARCJET_KEY=aj_...
```

### 4. Run Database Migrations

```bash
npm run db:migrate
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗄️ Database Schema

The project uses a relational schema managed by Drizzle. Key tables include:

- **users**: User profiles managed via Clerk webhooks.
- **job_info**: Details about the target job (description, title, level).
- **interviews**: Records of voice sessions, including Hume Chat IDs and feedback.
- **questions**: Generated technical questions and difficulty levels.

## 🛡️ Security

This project implements Arcjet middleware to protect against:

- Rate limiting (Token Bucket algorithm) based on user ID.
- Bot detection to prevent automated abuse of AI resources.

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
```
📄 License
Distributed under the MIT License. See LICENSE for more information.
