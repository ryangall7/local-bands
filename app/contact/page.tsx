export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}
import Image from 'next/image'
import BandsTexture from '@/public/images/bands-texture.jpg'

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <Image src={BandsTexture} className="fixed top-0 left-0 w-full h-[100vh] object-fit" alt="bands Texture"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="mt-32 mb-12 md:mt-40 md:pb-20 shadow-lg py-6 px-8 border-gray-200 rounded bg-white max-w-3xl mx-auto">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-8">
            <h1 className="h1">Let us know your thoughts.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto bg-white">
            <form name="contact" netlify>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" name="name" placeholder="Your Name" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" name="email" placeholder="Enter your email address" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Whats up?</label>
                  <textarea className="form-textarea w-full text-gray-800" rows={4} name="message" placeholder="Enter your message"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" name="Subscribe" />
                      <span className="text-gray-600 ml-2">Let me know about future shenanigans</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit">Submit</button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Check us out on <Link href="https://www.facebook.com/LocalBandID" target="blank" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Facebook</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
