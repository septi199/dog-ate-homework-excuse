import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, under 200 characters, in which a dog explains why it ate the
// homework. The dog's logic: the homework never threw a ball for it, so
// it owed the homework nothing.
function main(): void {
  function compose(): string {
    const clauses = [
      "It was blank, it smelled like pencil,",
      "and honestly it was the only homework in the house",
      "that never once threw a ball for me.",
    ];
    return clauses.join(" ");
  }

  function resolveDir(): string {
    const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
    return fromEnv !== undefined && fromEnv !== "" ? fromEnv : "/output";
  }

  function guard(text: string): void {
    if (text.length < 1 || text.length >= 200) {
      throw new Error(`entry length ${text.length} is outside the under-200 character gate`);
    }
  }

  const text = compose();
  guard(text);
  const dir = resolveDir();
  const outPath = join(dir, "entry.txt");
  mkdirSync(dir, { recursive: true });
  writeFileSync(outPath, text, "utf8");

  // Byte-level verification: compare raw buffers, not decoded strings.
  const written = readFileSync(outPath);
  if (!written.equals(Buffer.from(text, "utf8"))) {
    throw new Error("entry.txt verification failed: bytes differ after write");
  }

  console.log(`wrote ${outPath} (${text.length} characters)`);
}

main();
