-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'NURSE',
ALTER COLUMN "updated_at" DROP DEFAULT;
