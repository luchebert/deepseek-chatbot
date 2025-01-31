// app/routes/index.tsx
import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div>
      <h1>DeepSeek Chatbot</h1>
    </div>
  );
}
