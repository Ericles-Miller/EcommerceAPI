import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient().states;

const states = [
  { name: "Acre" },
  { name: "Alagoas" },
  { name: "Amapá" },
  { name: "Amazonas" },
  { name: "Bahia" },
  { name: "Ceará" },
  { name: "Espírito Santo" },
  { name: "Goiás" },
  { name: "Maranhão" },
  { name: "Mato Grosso" },
  { name: "Mato Grosso do Sul" },
  { name: "Minas Gerais" },
  { name: "Pará" },
  { name: "Paraíba" },
  { name: "Paraná" },
  { name: "Pernambuco" },
  { name: "Piauí" },
  { name: "Rio de Janeiro" },
  { name: "Rio Grande do Norte" },
  { name: "Rio Grande do Sul" },
  { name: "Rondônia" },
  { name: "Rio de Janeiro" },
  { name: "Rio Grande do Norte" },
  { name: "Rio Grande do Sul" },
  { name: "Rondônia" },
  { name: "Roraima" },
  { name: "Santa Catarina" },
  { name: "São Paulo" },
  { name: "Sergipe" },
  { name: "Tocantins" },
  { name: "Distrito Federal" },
];

async function createSeedStates() {
  states.map(async (state) => {
    await prisma.create({
      data: {
        country: "brasil",
        name: state.name,
        id: uuid(),
      },
    });
  });

  console.log("seeds states created");
}

createSeedStates();
