'use client';

// import { Poppins } from 'next/font/google';
import Link from 'next/link';

import {
  ChartNoAxesGantt,
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
} from 'lucide-react';
import { useState } from 'react';

import { Container } from '@/components/Container/Container';
import { ModeToggle } from '@/components/Themes/ModeToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="border-b shadow-2xl">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-sm lg:text-3xl font-semibold">Ikhuku</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 mx-4">
            <Input
              type="search"
              placeholder="Search"
              className="w-full pl-10"
            />
            <Search className="absolute ml-3" />
          </div>
          <div className="md:hidden flex items-center">
            <Button onClick={() => setShowSearchBar(true)}>
              <Search />
            </Button>
            {showSearchBar && (
              <div className="fixed top-0 left-0 w-full h-full bg-background p-4">
                <Input
                  type="search"
                  placeholder="Search"
                  autoFocus
                  className="w-full pl-10 relative"
                />
                <Button
                  onClick={() => setShowSearchBar(false)}
                  className="absolute top-4 right-4"
                >
                  X
                </Button>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ModeToggle />
            {/* Account DropDown */}
            <div className="relative group hidden md:block">
              <Button>Account</Button>
              <div className="absolute hidden group-hover:block bg-background p-4 border">
                <Link href={'/login'}>Login</Link>
                <Link href={'/signup'}>Sign Up</Link>
              </div>
            </div>
            {/* Services DropDown */}
            <div className="relative group hidden md:block">
              <Button>Services</Button>
              <div className="absolute hidden group-hover:block bg-background p-4 border">
                <Link href={'/login'}>Login</Link>
                <Link href={'/signup'}>Sign Up</Link>
              </div>
            </div>

            {/* Shopping Cart */}
            <Button className="hidden md:block">
              <ShoppingCart />
            </Button>

            {/* Sidebar Menu */}
            <ChartNoAxesGantt
              onClick={() => setShowSideBar(true)}
              className="md:hidden"
            />
            {showSideBar && (
              <div className="fixed top-0 right-0 w-full h-full bg-background p-4">
                <Container>
                  <Button
                    className="top-4 right-4"
                    onClick={() => setShowSideBar(false)}
                  >
                    X
                  </Button>
                  <ul>
                    {/* <li>
                      <Link href="/login">Login</Link>
                    </li>
                    <li>
                      <Link href="/signup">signup</Link>
                    </li>
                    <li>
                      <Link href="/service 1">services 1</Link>
                    </li>
                    <li>
                      <Link href="/service 2">services 2</Link>
                    </li>
                    <li>
                      <Link href="/services 3">services 3</Link>
                    </li> */}

                    <div className="flex flex-col gap-3">
                      {/* Account DropDown */}
                      <div className="relative group">
                        <Button variant="ghost">
                          Account <ChevronDown />
                        </Button>
                        <div className="absolute hidden group-hover:block bg-background p-4 border">
                          <Link href={'/profile'}>My Account</Link>
                          <Link href={'/orders'}>Orders</Link>
                          <Link href={'/saved'}>Saved Orders</Link>
                          <Link href={'/inbox'}>inbox</Link>
                        </div>
                      </div>

                      {/* Services DropDown */}
                      <div className="relative group">
                        <Button variant="ghost">
                          Services <ChevronDown />
                        </Button>
                        <div className="absolute hidden group-hover:block bg-background p-4 border">
                          <Link href={'/login'}>Our Call Center</Link>
                          <Link href={'/login'}>Sell on Ikhuku</Link>
                          <Link href={'/login'}>Best Deals</Link>
                        </div>
                      </div>

                      {/* DropDown Menu */}
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          Open <ChevronDown />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem>Billing</DropdownMenuItem>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* Shopping Cart */}
                      {/* <Button> */}
                      <div className="flex items-center gap-3">
                        <span>Cart</span>
                        <ShoppingCart />
                      </div>
                      {/* </Button> */}

                      {/* Categories DropDown */}
                      <div className="relative group">
                        <Button variant="ghost">
                          Categories <ChevronDown />
                        </Button>
                        <div className="absolute hidden group-hover:block bg-background p-4 border">
                          <Link href={'/'}>Supermarket</Link>
                          <Link href={'/'}>Health & Beauty</Link>
                          <Link href={'/'}>Home & Office</Link>
                          <Link href={'/'}>Appliances</Link>
                          <Link href={'/'}>Phone & Tablets</Link>
                          <Link href={'/'}>Computing</Link>
                          <Link href={'/'}>Electronics</Link>
                          <Link href={'/'}>Fashion</Link>
                          <Link href={'/'}>Baby Products</Link>
                          <Link href={'/'}>Gaming Gadgets</Link>
                          <Link href={'/'}>Sporting Equipments</Link>
                          <Link href={'/'}>Special Offers</Link>
                          <Link href={'/'}>50% off Sales</Link>
                          <Link href={'/'}>Retailer</Link>
                          <Link href={'/'}>Girting</Link>
                          <Link href={'/'}>Benefit Programs</Link>
                        </div>
                      </div>

                      {/* Theme Toggle */}
                      <ModeToggle />
                    </div>
                  </ul>
                </Container>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};
