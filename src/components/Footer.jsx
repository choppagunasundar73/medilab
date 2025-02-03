import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Medilab</h3>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
            </div>
          </div>
          {/* Add other footer sections... */}
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Medilab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;