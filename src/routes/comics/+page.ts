import type { Comic } from "../types";

export const ssr = true;

export const prerender = true;

export async function load() {
  const email = "n.borisov@innopolis.university";
  const url = "https://fwd.innopolis.university/api/hw2?email=" + email;
  const id = await fetch(url)
    .then(async (res) => {
      res.json();
    })
    .catch((error: string) => {
      console.log(error);
    });

  const com: Comic = await fetch(
    "https://fwd.innopolis.university/api/comic?id=" + id,
  )
    .then(async (response) => {
      await response.json();
    })
    .catch((error: string) => {
      console.log(error);
    });
  return com;
}
