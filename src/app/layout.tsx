"use client";

import { Provider } from "react-redux";
import { store } from "./Redux/store";
import type { Metadata } from "next";
import { Capriola, Outfit } from "next/font/google";
import "./globals.css";

const capriola = Capriola({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Capriola has only one weight
  variable: "--font-capriola", // Optional: Use a CSS variable
});

// Configure the Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300"], // Specify multiple weights if needed
  variable: "--font-outfit",
});

const metadata: Metadata = {
  title: "Wizz GYM Kampala",
  description:
    "Wizz Gym in Kampala, Uganda, is a top fitness center offering cutting-edge equipment, certified trainers, and diverse classes. Achieve your fitness goals in a modern, motivating environment at wizz Gym. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased ${capriola.variable} ${outfit.variable}`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
