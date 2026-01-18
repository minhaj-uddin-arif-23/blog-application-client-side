import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      
      {/* Gradient Background Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl" />

      {/* Glass Card */}
      <div className="relative z-10 max-w-md rounded-2xl border bg-background/70 p-8 text-center shadow-xl backdrop-blur-md">
        <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-7xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you’re trying to reach doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
            <Link href="/">Go Home</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/blog">Explore Blogs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
