/*
  Warnings:

  - You are about to drop the `PermisssionRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PermisssionToRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PermisssionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermisssionRoles" DROP CONSTRAINT "PermisssionRoles_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "PermisssionRoles" DROP CONSTRAINT "PermisssionRoles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "_PermisssionToRole" DROP CONSTRAINT "_PermisssionToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermisssionToRole" DROP CONSTRAINT "_PermisssionToRole_B_fkey";

-- DropForeignKey
ALTER TABLE "_PermisssionToUser" DROP CONSTRAINT "_PermisssionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermisssionToUser" DROP CONSTRAINT "_PermisssionToUser_B_fkey";

-- DropTable
DROP TABLE "PermisssionRoles";

-- DropTable
DROP TABLE "_PermisssionToRole";

-- DropTable
DROP TABLE "_PermisssionToUser";

-- CreateTable
CREATE TABLE "PermissionRoles" (
    "permissionId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "PermissionRoles_pkey" PRIMARY KEY ("permissionId","roleId")
);

-- CreateTable
CREATE TABLE "_PermissionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToUser_AB_unique" ON "_PermissionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToUser_B_index" ON "_PermissionToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");

-- AddForeignKey
ALTER TABLE "PermissionRoles" ADD CONSTRAINT "PermissionRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionRoles" ADD CONSTRAINT "PermissionRoles_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
