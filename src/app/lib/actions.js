"use server"

import { cookies } from "next/headers"

export async function setCookie(name, value) {
  cookies().set(name, value);
}