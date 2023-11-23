import { User } from "next-auth";

import { IUser } from "../types/user";
import { $api } from "./instance";

export async function signIn(credentials: { email: string; password: string }) {
  try {
    const { data } = await $api.post<{ user: IUser; jwt: string }>(
      `api/auth/local`,
      {
        identifier: credentials.email,
        password: credentials.password,
      },
    );

    return {
      id: data.user.email,
      email: data.user.email,
      avatar: data.user.avatar,
      username: data.user.username,
      jwt: data.jwt,
    } as User;
  } catch (e) {
    //@ts-ignore
    console.log(e.message);
    return Promise.reject({
      message: "Login error, not valid data!",
    });
  }
}
