-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "displayId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fromStreetAddress" TEXT NOT NULL DEFAULT '',
    "fromCity" TEXT NOT NULL DEFAULT '',
    "fromPostalCode" TEXT NOT NULL DEFAULT '',
    "fromCountry" TEXT NOT NULL DEFAULT '',
    "clientName" TEXT NOT NULL DEFAULT '',
    "clientEmail" TEXT NOT NULL DEFAULT '',
    "clientStreetAddress" TEXT NOT NULL DEFAULT '',
    "clientCity" TEXT NOT NULL DEFAULT '',
    "clientPostalCode" TEXT NOT NULL DEFAULT '',
    "clientCountry" TEXT NOT NULL DEFAULT '',
    "invoiceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentTerms" INTEGER NOT NULL DEFAULT 0,
    "projectDescription" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0,
    "invoiceId" INTEGER NOT NULL,

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InvoiceItem_invoiceId_name_key" ON "InvoiceItem"("invoiceId", "name");

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
