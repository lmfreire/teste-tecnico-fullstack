-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones_user" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "phones_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails_user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "emails_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones_contact" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "user_contact_id" TEXT NOT NULL,

    CONSTRAINT "phones_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_contact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_contact_id" TEXT NOT NULL,

    CONSTRAINT "email_contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emails_user_email_key" ON "emails_user"("email");

-- AddForeignKey
ALTER TABLE "phones_user" ADD CONSTRAINT "phones_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails_user" ADD CONSTRAINT "emails_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_contact" ADD CONSTRAINT "user_contact_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones_contact" ADD CONSTRAINT "phones_contact_user_contact_id_fkey" FOREIGN KEY ("user_contact_id") REFERENCES "user_contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_contact" ADD CONSTRAINT "email_contact_user_contact_id_fkey" FOREIGN KEY ("user_contact_id") REFERENCES "user_contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
