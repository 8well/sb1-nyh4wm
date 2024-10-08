import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <Mail className="mr-2" />
              info@displaytokens.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2" />
              123 Blockchain Street, Crypto City, 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact