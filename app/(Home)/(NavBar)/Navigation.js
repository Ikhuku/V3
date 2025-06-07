'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Moon, Sun, ShoppingCart, Menu, Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Logo
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex items-center flex-1 mx-4">
        <Input type="search" placeholder="Search" className="w-full pl-10" />
        <Search className="absolute ml-3" />
      </div>
      <div className="md:hidden flex items-center">
        <Button variant="ghost" onClick={() => setShowSearch(true)}>
          <Search />
        </Button>
        {showSearch && (
          <div className="fixed top-0 left-0 w-full h-full bg-background p-4">
            <Input
              type="search"
              placeholder="Search"
              className="w-full pl-10"
              autoFocus
            />
            <Button variant="ghost" onClick={() => setShowSearch(false)}>
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>

        {/* Account Dropdown */}
        <div className="relative group">
          <Button variant="ghost">Account</Button>
          <div className="absolute hidden group-hover:block bg-background p-4 border">
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="relative group">
          <Button variant="ghost">Services</Button>
          <div className="absolute hidden group-hover:block bg-background p-4 border">
            <Link href="/service1">Service 1</Link>
            <Link href="/service2">Service 2</Link>
          </div>
        </div>

        {/* Cart */}
        <Button variant="ghost">
          <ShoppingCart />
        </Button>

        {/* Sidebar Menu */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setShowSidebar(true)}
        >
          <Menu />
        </Button>
        {showSidebar && (
          <div className="fixed top-0 right-0 w-full h-full bg-background p-4">
            <Button variant="ghost" onClick={() => setShowSidebar(false)}>
              Close
            </Button>
            <ul>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <li>
                <Link href="/service1">Service 1</Link>
              </li>
              <li>
                <Link href="/service2">Service 2</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
