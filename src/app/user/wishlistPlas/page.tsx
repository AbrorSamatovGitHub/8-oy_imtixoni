"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const WishlistPlasPage = async () => {
  return (
    <div className="relative h-[70vh] rounded-xl pt-8 pl-6 w-[1000px] pb-[140px] bg-white ">
      <h1 className="text-font22 mb-[22px]">Sizning qurilmalaringiz</h1>
      <div className="mb-6">
        <Label>Qurilma turi</Label>
        <Select>
          <SelectTrigger className="h-[38px] w-[300px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="qurulma1">Smartphones</SelectItem>
              <SelectItem value="qurulma2">Tablets</SelectItem>
              <SelectItem value="qurulma3">Headphones</SelectItem>
              <SelectItem value="qurulma4">FlashDrive</SelectItem>
              <SelectItem value="qurulma5">Accessuars</SelectItem>
              <SelectItem value="qurulma6">Gadgets</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <Label>Qurilma markasi</Label>
        <Select>
          <SelectTrigger className="h-[38px] w-[300px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="qurulma1">Smartphones</SelectItem>
              <SelectItem value="qurulma2">Tablets</SelectItem>
              <SelectItem value="qurulma3">Headphones</SelectItem>
              <SelectItem value="qurulma4">FlashDrive</SelectItem>
              <SelectItem value="qurulma5">Accessuars</SelectItem>
              <SelectItem value="qurulma6">Gadgets</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
      </div>
      <div className="mb-6">
        <Label>Qurilma modeli</Label>
        <Select>
          <SelectTrigger className="h-[38px] w-[300px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="qurulma1">Smartphones</SelectItem>
              <SelectItem value="qurulma2">Tablets</SelectItem>
              <SelectItem value="qurulma3">Headphones</SelectItem>
              <SelectItem value="qurulma4">FlashDrive</SelectItem>
              <SelectItem value="qurulma5">Accessuars</SelectItem>
              <SelectItem value="qurulma6">Gadgets</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
      </div>
      <div className="absolute bottom-6 right-[100px] flex gap-5">
        <Button className="bg-white text-black hover:bg-primary">
          Bekor qilish
        </Button>
        <Button className="hover:bg-green-400">Qurilmani qo’shish</Button>
      </div>
    </div>
  );
};

export default WishlistPlasPage;
