"use server";
import React from "react";
import { CategoryType } from "@/types/category";

export const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:3600/category");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};

export const getBanners = async () => {
  try {
    const res = await fetch("http://localhost:3600/banners");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3600/products");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getSmartphones = async () => {
  try {
    const res = await fetch("http://localhost:3600/Smartphones");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getTablets = async () => {
  try {
    const res = await fetch("http://localhost:3600/Tablets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getHeadphones = async () => {
  try {
    const res = await fetch("http://localhost:3600/Headphones");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getFlashDrive = async () => {
  try {
    const res = await fetch("http://localhost:3600/FlashDrive");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getAccessuars = async () => {
  try {
    const res = await fetch("http://localhost:3600/Accessuars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};
export const getGadgets = async () => {
  try {
    const res = await fetch("http://localhost:3600/Gadgets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error")
  }
};





