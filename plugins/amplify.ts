import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import aws_exports from "../aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(aws_exports);

  return {
    provide: {
      auth: Auth,
    },
  };
})