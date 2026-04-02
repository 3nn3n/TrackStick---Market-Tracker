import { inngest } from "@/lib/inngest/client";
import { sendSignUpEmail } from "@/lib/inngest/function";
import { serve } from "inngest/next";
import { send } from "process";

export const {GET, POST, PUT} = serve({
  client: inngest,
  functions: [sendSignUpEmail]
})