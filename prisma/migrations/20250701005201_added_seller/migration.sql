/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Email', 'Google', 'Apple', 'Facebook');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "credit" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'Email',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Seller" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "businessRegno" TEXT NOT NULL,
    "businessLocation" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productQaA" TEXT NOT NULL,
    "shippingMethod" TEXT NOT NULL,
    "exprience" TEXT NOT NULL,
    "productMedia" TEXT NOT NULL,
    "customerComplain" TEXT NOT NULL,
    "refundPolicy" TEXT NOT NULL,
    "warranties" TEXT NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);
