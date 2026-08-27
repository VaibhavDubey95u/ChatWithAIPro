-- CreateTable
CREATE TABLE "public"."Link" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" VARCHAR(500),
    "clickCount" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
