import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlobeIcon } from "lucide-react";

export default function Home() {
  return (
    <main 
      className="container relative mx-auto scroll-my-12 overflow-auto
      p-4 print:p-12 md:p-16"
    >
      <section 
        className="mx-auto w-full max-w-2xl space-y-8 bg-white
        print:space-y-6"
      >
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 space-y-2">
            <h1 className="text-xl sm:text-3xl font-bold">
              Caleb Zamalloa
            </h1>
            <p 
              className="max-w-md text-balance font-mono text-sm text-muted-foreground
              sm:text-base"
            >
              Full-stack developer focused in create amazing UX/UI experiences.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
              <GlobeIcon className="size-3" />
              Madrid, Spain
            </p>
            <section>
              
            </section>
          </div>
          <a 
            href="https://github.com/ecaleb97" 
            target="_blank" 
            rel="noreferrer noopener"
          >
            <Avatar className="size-20 sm:size-28 border">
              <AvatarImage src="./favicon.ico" alt="" />
              <AvatarFallback 
                className="font-mono font-bold text-2xl"
              >
              CZ
              </AvatarFallback>
            </Avatar>
          </a>
        </div>
        
      </section>
    </main>
  );
}
