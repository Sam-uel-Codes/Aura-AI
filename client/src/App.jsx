import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import Community from "./pages/Community";
import RemoveObject from "./pages/RemoveObjects";
import RemoveBackground from "./pages/RemoveBackground";
import GenerateImages from "./pages/GenerateImages";
import ReviewResume from "./pages/ReviewResume";
import { Toaster } from "react-hot-toast";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="community" element={<Community />} />
          <Route path="remove-objects" element={<RemoveObject />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="generate-image" element={<GenerateImages />} />
          <Route path="review-resume" element={<ReviewResume />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
