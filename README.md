# 🤖 ChatWithAIPro

A modern, responsive AI chat application built with **Next.js** and **assistant-ui**. It offers a ChatGPT-style interface with threaded conversations, a collapsible sidebar, streaming responses and file attachments.

🔗 **Live Demo:** [chat-with-ai-pro.vercel.app](https://chat-with-ai-pro.vercel.app)

---

## 📌 Project Description

ChatWithAIPro is a full-stack conversational AI web app. The frontend is built on the [assistant-ui](https://github.com/assistant-ui/assistant-ui) component library, which provides a polished chat experience out of the box, while the backend exposes a chat API route that connects to a Large Language Model (LLM) and streams replies back to the user in real time.

The project is deployed on **Vercel** and was created as part of my software engineering learning journey.

---

## ✨ Features

- 💬 **Real-time chat** with streaming AI responses
- 🧵 **Multiple conversation threads** with a "New Thread" option
- 📂 **Collapsible sidebar** for easy thread navigation
- 📎 **File attachments** support in the composer
- 💡 **Suggested prompts** on the welcome screen to get started quickly
- 📱 **Responsive UI** that works on desktop and mobile
- ⚡ **Fast deployment** with Vercel

---

## 🛠️ Tech Stack

| Category        | Technology                                   |
| --------------- | -------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org/) (React)       |
| Chat UI         | [assistant-ui](https://www.assistant-ui.com/) |
| Language        | TypeScript / JavaScript                      |
| Styling         | Tailwind CSS                                 |
| AI Integration  | LLM provider API (via Next.js API route)     |
| Deployment      | [Vercel](https://vercel.com/)                |
| Package Manager | npm                                          |

---

## 📁 Project Structure

```
ChatWithAIPro/
├── LEC01/
│   └── link-tree/      # Practice project from Lecture 01
├── my-app/             # Main chat application (Next.js + assistant-ui)
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- An API key from your LLM provider (e.g. OpenAI)

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/VaibhavDubey95u/ChatWithAIPro.git
```

**2. Go to the app directory**

```bash
cd ChatWithAIPro/my-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Set up environment variables**

Create a `.env.local` file in the `my-app` folder and add your API key:

```env
OPENAI_API_KEY=your_api_key_here
```

**5. Run the development server**

```bash
npm run dev
```

**6. Open the app**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. Import the project in Vercel and set the **Root Directory** to `my-app`.
3. Add your environment variables (e.g. `OPENAI_API_KEY`) in the project settings.
4. Click **Deploy**.

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to open an [issue](https://github.com/VaibhavDubey95u/ChatWithAIPro/issues) or submit a pull request.

---

## 👨‍💻 Author

**Vaibhav Dubey**
GitHub: [@VaibhavDubey95u](https://github.com/VaibhavDubey95u)

---

⭐ If you like this project, don't forget to give it a star!
