-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "clerk" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "usename" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "imageUrl" TEXT,
    "bio" VARCHAR(500),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_clerk_key" ON "public"."user"("clerk");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_usename_key" ON "public"."user"("usename");
