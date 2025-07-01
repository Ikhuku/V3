import { User, Package, Mail, ThumbsUp, Heart, Star, Settings, Clock, LogOut, Search, Menu } from "lucide-react"

export default function ProfilePage() {
  const menuItems = [
    {
      icon: User,
      label: "My Account",
      href: "/profile/account",
    },
    {
      icon: Package,
      label: "Orders",
      href: "/profile/orders",
    },
    {
      icon: Mail,
      label: "Inbox",
      href: "/profile/inbox",
    },
    {
      icon: ThumbsUp,
      label: "Reviews",
      href: "/profile/reviews",
    },
    {
      icon: Heart,
      label: "Saved items",
      href: "/profile/saved",
    },
    {
      icon: Star,
      label: "Followed sellers",
      href: "/profile/followed",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/profile/settings",
    },
    {
      icon: Clock,
      label: "Recently viewed",
      href: "/profile/recent",
    },
    {
      icon: LogOut,
      label: "Log out",
      href: "/profile/logout",
    },
  ]

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <div><img src="/Whatsapp-image.png
        " alt="" /></div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-700" />
          <Menu className="w-6 h-6 text-gray-700" />
        </div>
      </header>

      {/* Menu Items */}
      <div className="px-6 pt-8">
        <nav className="space-y-0">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-200 -mx-2 px-2 rounded-lg"
              >
                <IconComponent className="w-5 h-5 text-gray-700" />
                <span className="text-base font-medium">{item.label}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
