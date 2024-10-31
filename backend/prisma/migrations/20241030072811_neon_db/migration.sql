-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "open" DOUBLE PRECISION NOT NULL,
    "high" DOUBLE PRECISION NOT NULL,
    "low" DOUBLE PRECISION NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "adjClose" DOUBLE PRECISION NOT NULL,
    "volume" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);
