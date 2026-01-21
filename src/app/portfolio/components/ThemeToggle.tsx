"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = theme=='dark'
return (
  <div className="flex flex-row space-x-3" >
    {/* <Sun/>
    <Switch checked={isDark} onCheckedChange={(checked:boolean)=>setTheme(checked?"dark":"light")}/>
    <Moon/> */}
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
    </Button>
    </div>
  );
}
