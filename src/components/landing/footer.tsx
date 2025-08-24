import {
  Coffee,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { CopyrightYear } from "./copyright-year";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-secondary text-secondary-foreground py-16"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Coffee className="h-7 w-7 text-accent" />
            <h3 className="text-2xl font-bold">AboutTime Hub</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your daily grind, upgraded.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-lg tracking-wider uppercase text-accent">
            Contact & Hours
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
              <Link
                href="https://maps.app.goo.gl/xpfPwHCZyLoP9rw8A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline hover:text-accent transition-colors"
              >
                3287 Wilshire Blvd B, Los Angeles, California 90010
              </Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
              {/* daily hours | MON-SAT 8 AM-1 AM | SUN 8 AM-12 AM (kitchen closed at 2 AM) */}
              <span>Mon - Sat: 8am - 1am | Sun: 8am - 12am</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
              <Link
                href="tel:+12133409070"
                className="text-black hover:underline hover:text-accent transition-colors"
              >
                (213) 340-9070
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-lg tracking-wider uppercase text-accent">
            Follow Us
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-5">
            <Link
              href="https://www.instagram.com/abouttimecafe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/abouttimecafe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com/abouttimecafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          &copy; <CopyrightYear /> AboutTime Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
